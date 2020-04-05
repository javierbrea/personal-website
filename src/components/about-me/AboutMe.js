/*
Copyright 2020 Javier Brea

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

import React from "react";

import Section from "components/section";

import classes from "./aboutMe.module.scss";

const AboutMe = () => {
  return (
    <Section>
      <div className="row">
        <div className="col-lg-12">
          <div className={classes.text}>
            <h4>About Myself</h4>
            <p>
              Always passionate about technology, I guided my professional career by a motto:{" "}
              <b>
                &quot;Choose a job you love, and you will never have to work a day in your
                life&quot;
              </b>
              . I think I got it. But this doesn&apos;t mean that I like the immobility nor that I
              think I have earned all, quite the opposite. I realized that one of the things I love
              about software engineering is that it is in continuous evolution, and that forces me
              to face new challenges continually and to solve new problems using a great variety of
              new tools, so I have to be in continuous learning.
            </p>
            <p>
              I like to be on the bleeding edge about the technologies I use, but always
              maintaining focus over solving the problem. It´s necessary to make coexist the
              creativity and the practicality, and that´s the key for me. I consider myself
              methodic, meticulous and even perfectionist, but this does not make distract me about
              &quot;getting things done&quot;. I consider that my job is to solve problems in which
              many variables come into play: Scalability, modularity, performance, readability,
              maintainability... and so on. For me this is really exciting, I love to find the
              correct balance between all these concepts for the problem, and then solve it in the
              most optimal way possible.
            </p>
            <p>
              Leaving aside the technical part, the front end development allows me to be in touch
              with the most visible part of an application, what users ultimately get to touch and
              feel. So It makes possible not to leave completely my designer role, and allows me to
              get involved in the user experience. Both of these are areas that always have given
              me great satisfactions too.
            </p>
            <p>
              The evolution of the front-end development has brought to me again the server-side
              technologies, (which I used during my initial career for a long time) making me to
              achieve great skills in Node.js, end to end testing and continuous integration tools.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutMe;
