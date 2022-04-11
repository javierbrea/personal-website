---
title: "Spell checking Markdown documents using a Github action"
date: "2022-04-11T12:00:00Z"
description: "How to spell check your docs in a continuous integration pipeline"
tags:
    - spell
    - check
    - Markdown
    - Github
    - action
    - CI/CD
    - continuous integration
    - pipeline
    - automatic
    - spellchecking
    - how to
    - example
featured: { image: ./check-for-spell-mistakes_thumbnail.jpg }
---

![Spell mistake in a typewriter document](./check-for-spell-mistakes.jpg)

As software engineers, we write a lot of documentation (or we should, at least). It is usual to __write these docs in Markdown format in the code repository__ for many reasons, but mainly:

* Docs are kept in plain text, isolated from the format.
* Docs are under version control.
* Docs modifications can be reviewed in the same pull request than the code modifications.

While it should not be necessary to mention the importance of avoiding spelling mistakes in our docs, it is very common to see __comments in code reviews about typos__ in them. If the errors are not detected on time, they would impact on our perceived trustworthiness. __Tolerance for typos is low__. It makes the writer look careless.

You can avoid typos by checking your spelling locally, using a plugin for the IDE, for example, but it would depend only on you. I personally prefer to add automatic check mechanisms to the continuous integration pipeline that don't depend on recommendations for local environments.

So, in this short post we'll see how to configure a Github action to check the spelling of Markdown documents whenever a pull request is opened on our repository.

## Creating the Github workflow

> If you already have a Github workflow configured in your repository and you want to add the spell check to it as another job or step, you can skip this chapter and read the next one directly.

We are going to create a new Github workflow to execute the spell check. Create a `.github/workflows/spellcheck.yml` file in the repository.

```txt
├── .github/
│   └── workflows/
│       └── spellcheck.yml
```

We will name the workflow as `spellcheck`. It will be executed each time a new pull request is opened, and it will contain only one job named `check-spelling`. For the moment we will only add a step for checking out the repository.

```yaml
name: spellcheck
on:
  pull_request:
jobs:
  check-spelling:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
```

## Adding the spell check step

For the spellchecking, we will use the [`rojopolis/spellcheck-github-actions` Github action](https://github.com/rojopolis/spellcheck-github-actions), which is able to check Python, Markdown, HTML and Text files, and it supports following languages:

* English
* German
* Spanish

Add the step to the workflow where correspond. Based on the above example, we will add it right after checking out the repository code:

```yaml
name: spellcheck
on:
  pull_request:
jobs:
  check-spelling:
    runs-on: ubuntu-latest
      - name: Checkout
        uses: actions/checkout@v3
      - name: Check Spelling
        uses: rojopolis/spellcheck-github-actions@0.23.0
        with:
          config_path: .spellcheck.yml
          task_name: Markdown
```

## Configuration

Now we have to add a configuration file for the spelling checker. It uses [`PySpelling`](https://facelessuser.github.io/pyspelling/) under the hood. When checking Markdown files, it first converts a Markdown text file's buffer using [`Python Markdown`](https://python-markdown.github.io/) and returns a single `SourceText` object containing the text as HTML. Then it captures the HTML content, comments, and even attributes and performs the check. It has a lot of configuration options, but here we are going to see only an example with some basics. For further info you can read the docs of the [`rojopolis/spellcheck-github-actions` Github action](https://github.com/rojopolis/spellcheck-github-actions).

* Create a file named `.spellcheck.yml` in the root folder of the repository, and paste the contents of the example below.
* Change the `sources` property depending on your repository structure. Provide patterns for every folder containing the files that you want to automatically check.

```yaml
matrix:
- name: Markdown
  expect_match: false
  apsell:
    mode: en
  dictionary:
    wordlists:
    - .wordlist.txt
    output: wordlist.dic
    encoding: utf-8
  pipeline:
  - pyspelling.filters.markdown:
      markdown_extensions:
      - markdown.extensions.extra:
  - pyspelling.filters.html:
      comments: false
      attributes:
      - alt
      ignores:
      - ':matches(code, pre)'
      - 'code'
      - 'pre'
      - 'blockquote'
  sources:
  - '*.md'
  - 'content/blog/**/*.md'
```

The above configuration will check the spelling of your repository's `README.md` and other Markdown files in the `content/blog` folder against an English dictionary. This is the configuration used to check the contents of this blog.

## Checking for bad spelling

Now, whenever a new pull request is opened, the Github action will be executed and it will help you make sure _most_ spelling errors do not make it into your repository. If the check detects any misspelling, the action will fail and you'll see a trace in the Github action logs like:

```txt
Misspelled words:
<htmlcontent> README.md (1)
--------------------------------------------------------------------------------
Github

!!!Spelling check failed!!!
```

Now you can fix the error and push the docs again, or you can also add the word to your own dictionary in case it is a false positive, as described in the next chapter.

## Adding custom words

Sometimes you'll probably have to use some words that are not contained in the default [`Aspell`](http://aspell.net/) dictionary used by [`PySpelling`](https://facelessuser.github.io/pyspelling/). This is very usual when talking about terms used in technical docs. Look again the configuration example above, and you'll see that we have added a `wordlists` property to the `dictionary` one. It makes reference to a `.wordlist.txt` file, so you can create that file and add your own words to it, and [`PySpelling`](https://facelessuser.github.io/pyspelling/) will ignore them.

```txt
Github
Markdown
```

Note also that the configuration includes some filters to ignore some patterns. So, if the word is surrounded by a `code` tag in an HTML file it will be ignored, for example. Then, you could format your text in a more convenient way instead of adding the word to your custom dictionary. It would depend on the case, but sometimes it may be a good practice to give a different format to some kinds of terms.

```md
In a Markdown file, Github will be detected as a misspelling, but `Github` won't.
```

## Finally

Then, after fixing all errors or adding the necessary custom words, at some point we get:

```txt
Spelling check passed :)
```

And this is how our repository will finally like after adding all the needed configuration files:

```txt
├── .github/
│   └── workflows/
│       └── spellcheck.yml
├── .spellcheck.yml
└── .wordlist.txt
```

## Conclusion

Adding an automatic spellchecking step to your continuous integration pipeline will prevent your docs containing ugly typos, and it will save you lots of hours of code reviews. It won't prevent other types of orthographic errors, like semantic or style related ones, so I you'll still have to reread carefully your docs before publishing them, but it will be  a great help.

> This blog is being checked with the examples provided in this post, because it is generated from Markdown files, so you can get the code of the examples directly from [`https://github.com/javierbrea/personal-website`](https://github.com/javierbrea/personal-website).

## Resources and references

* [Github actions](https://github.com/features/actions)
* [`spellcheck-github-actions`](https://github.com/rojopolis/spellcheck-github-actions)
* [`PySpelling`](https://facelessuser.github.io/pyspelling/)
* [`Python Markdown`](https://python-markdown.github.io/)
* [`GNU Aspell`](http://aspell.net/)
