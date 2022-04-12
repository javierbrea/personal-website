---
title: "Pnpm and Nx monorepo. Part 1"
date: "2022-04-12T12:00:00Z"
description: "Requirements for a good monorepo workflow"
tags:
    - monorepo
    - Node.js
    - Pnpm
    - Nx
    - dependencies
    - package
    - Node
    - repository
featured: { image: ./pnpm-nx-monorepo-01_thumbnail.jpg }
---

![Ship container](./pnpm-nx-monorepo-01.jpg)

<div class="photoAuthor">Photo by Kaique Rocha</div>

## Why a monorepo?

Those who have worked maintaining __many dependent NPM packages in different repositories__ would answer to this question with lots of reasons very quickly. I've been dealing with this scenario for many years, and I can tell you that I have suffered it in my own skin. In fact, in the past I have suffered it even when trying to maintain many packages in in the same repository. Let's see why:

### Dealing with independent repositories

In theory, it is perfectly possible to work in one package independently, then publish it, and then we can go to the other package, upgrade the dependency and continue working in the integration until it is ready, then publish it, and so on... __They are different packages because they are independently testeable and deployable/distributable, and that's how they must be__. But, in the real world, unfortunatelly, this workflow is not so easy. __In the real world we make mistakes__, we don't define the details of the implementation needed in one package at the sufficient low level, and when we are integrating the next package we realize that we have to make a step back and make a change in the package that we have just published, and then return to the next package again. Suppose that you are maintaining a project consisting on about ten packages, you are running the E2E tests of the last package, and then you realize that you have to modify again the first one... well, I can say that it's very frustrating, to say the least.

And this is only one of the main problems that I have found working with different repositories. Let's see some more:

* __Continuous integration workflow__ - The workflow for releasing a new version of the package who depends on the others becomes slow and tedious. The mere fact of upgrading a dependency in a "core" package can result in opening lots of pull request in different repositories until we have released new versions of all of the dependencies in series. As mentioned, it may result in a never end history if we find problems that make us to give steps back again and again.
* __Duplicity of dependencies, configuration and tooling__ - The configuration for the continuous integration workflow is duplicated. The same happens with the development dependencies and some configuration, such as linter configuration, NPM commands, and even documentation. In the practice, we see ourselves using copy-paste more times than we would like.
* __Duplicity of testing__ - Normally, each package should be testing the integration with its dependencies, and this usually ends in duplicating some integration tests in different repositories. Not to mention end to end tests, which usually are heaviest to run and require more tooling, and it could also become duplicated in all of the repositories, making the continuous integration workflow even harder.
* __POCs__ - Developing fast prototypes for introducing a major change in the system becomes hard when you can only modify one package at a time. This is not necessarily bad, normally we want to introduce changes progressively and in a very controlled way, but the true is that sometimes we need to probe some concept in a fast way.

### Mitigating the problems in the past

Let me make some memory about how we tried to solve some problems in the past, because it may be useful to check if all of these problems are really solved using the tools that we have today. During years we all have found different ways for mitigating one or another problem from the list above using different "hacks", but the point is that usually, when you mitigate one, then the other gets worse.

Let's see some examples that I have named _"pseudo workspace using x"_. But first of all, what I mean by "pseudo workspace"? Well, by "workspace" I refer to the feature of linking dependencies between the packages in a repository, so it does not install the dependency from the remote repository, but from the code of the other package in the repository at that moment. That's what today is named a "workspace" in NPM and Pnpm, for example. It allows to make changes in one package and see them in the other packages in the repository without the need to release a new version. As years ago I didn't know about a real "workspace" tool, I have tested by myself all of the next approaches, almost alwasy with bad results:

* __Pseudo workspace using [`npm link`](https://docs.npmjs.com/cli/v8/commands/npm-link)__ - Npm provides a `link` command since many years ago for linking packages locally, but it required to execute it locally for each package that you wanted to link or unlink, and there was no way to declarate those dependencies in a configuration file. The symlinks were created globally, and in my experience, it produced many issues. _(I don't know if has been improved by today)_.
* __Pseudo workspace using [`local paths`](https://docs.npmjs.com/cli/v7/configuring-npm/package-json#local-paths)__ - As of NPM version 2.0.0 you can provide a path to a local directory that contains a package. The approach was very similar to the previous one, but with the improvement of defining the local dependency in the `package.json` file. It also produced undesired changes in the `package-lock.json` files and lots of other issues that also made hard to work with it. I even published [my own tool providing a command line interface](https://github.com/javierbrea/npm-file-link) to link packages easier using `local paths` under the hood _(now the package is pending to be deprecated)_.
* __Publishing to a private registry__ - Maybe you know the [`Verdaccio`](https://verdaccio.org/) local NPM registry project, or even the deprecated [`Sinopia`](https://www.npmjs.com/package/sinopia), if you are as old as I am 😉. Well, these projects provide a local NPM registry that allows us to publish one package locally, then we can install it in the next one, and so on, so it solves partially the local development and integration workflow problems mentioned above if we setup a local registry, we take care of the order in which packages have to be published, etc. In my experience, the local development becomes a crazy thing when you have to deal with many packages, publish/unpublish or republish different versions, clean caches, etc. Not to mention the complexity of the pipelines if we keep the code in different repositories, then you'll probably have to define which repository pipelines trigger other ones where you'll probably have the integration tests, etc. That, supossing that the NPM private registry is ephemeral, because I worked in a project in which it was not ephemeral, it was allowed to unpublish packages, and continuous integration pipelines were continuously overwriting packages versions. I don't get nostalgic when I remember those days.
* __Using [Babel aliases](https://www.npmjs.com/package/babel-plugin-module-resolver)__ - Using [Babel](https://babeljs.io/) or [TypeScript](https://www.typescriptlang.org/) aliases allows to change the import references, so when you import one package from another, it loads it from the local workspace instead of the one downloaded by your NPM client. This is the approach that worked better for me, but it still requires some manual configuration for each package, and I don't like to always have to build my code just for these type of requirements. In fact, we'll see that this approach can still be used in some tools as `Nx` if you don't use `Pnpm` or other workspace tool.

All of these "hacks" talk about solving the problem of linking dependencies locally to avoid having to publish one package before running integration tests, but none of them talks about solving another problem created by a monorepo:

> If we have everything in a repository, we'll have to test everything every time we try to promote code, until we have a method for detecting which packages have been modified and which ones depends on them.

### Should we capitulate?

At this point one could say, _"Well, if having different packages produces such problems, why not to have all of the code in one single package in one repository?"_. The answer is simple: because __we don't want to have a monolithic package, we want to solve all of the mentioned problems in the workflow, but keeping isolated each package to be able to distribute it independently, and continue testing it independently, apart of running the appropiate integration tests when correspond.__

In the next chapters we will see that most of the problems have been already solved if we choose the appropiate tools, or at least we are in the good way. But first let's recapitulate a list of requirements to avoid the uncovenients mentioned above.

### Requirements for a monorepo

So, based on my ugly experiences described above, this is __my wish list for having a nice workflow__ when working with many dependent packages:



## Next chapters

- Building a Node.js monorepo using Pnpm and Nx
- Continuous integration in a PNPM monorepo using Github actions
- Create a comment in a PR about affected packages in a Nx.dev monorepo
- Github action to check if affected packages are upgraded properly in a monorepo