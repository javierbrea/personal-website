/*
Copyright 2020 Javier Brea

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

import { Fragment } from "react";
import clsx from "clsx";

import Section from "components/section";
import ImagesGallery from "components/images-gallery";
import ImageGalleryItem from "components/image-gallery-item";

import thumb1 from "images/gallery/01_thumb.jpg";
import img1 from "images/gallery/01.jpg";
import thumb2 from "images/gallery/02_thumb.jpg";
import img2 from "images/gallery/02.jpg";
import thumb3 from "images/gallery/03_thumb.jpg";
import img3 from "images/gallery/03.jpg";
import thumb4 from "images/gallery/04_thumb.jpg";
import img4 from "images/gallery/04.jpg";
import thumb5 from "images/gallery/05_thumb.jpg";
import img5 from "images/gallery/05.jpg";
import thumb6 from "images/gallery/06_thumb.jpg";
import img6 from "images/gallery/06.jpg";
import thumb7 from "images/gallery/07_thumb.jpg";
import img7 from "images/gallery/07.jpg";
import thumb8 from "images/gallery/08_thumb.jpg";
import img8 from "images/gallery/08.jpg";
import thumb9 from "images/gallery/09_thumb.jpg";
import img9 from "images/gallery/09.jpg";
import thumb10 from "images/gallery/10_thumb.jpg";
import img10 from "images/gallery/10.jpg";

import jobImage1 from "images/gallery/job-01.jpg";
import jobImage2 from "images/gallery/job-02.jpg";
import jobImage3 from "images/gallery/job-03.jpg";

import * as classes from "./aboutMe.module.scss";

const images = [
  { thumbnail: thumb1, src: img1, caption: "Uganda. Rafting in the Nile River", width: 4 },
  {
    thumbnail: thumb2,
    src: img2,
    caption: "Nepal. Feeding an elephant after riding him during a safari in the jungle.",
    width: 4,
  },
  {
    thumbnail: thumb3,
    src: img3,
    caption: "Spain. Summit of the Peñalara pike",
    width: 4,
  },
  {
    thumbnail: thumb4,
    src: img4,
    caption: "Rwanda. Gorillas trekking in the Mountains of the Moon",
    width: 6,
  },
  {
    thumbnail: thumb5,
    src: img5,
    caption: "India. In the Taj Mahal after a Rajasthan travel by train",
    width: 6,
  },
  {
    thumbnail: thumb6,
    src: img6,
    caption: "Nepal. Paragliding in Pokhara with the Himalayan Annapurna in background",
    width: 4,
  },
  {
    thumbnail: thumb7,
    src: img7,
    caption: "Peru. Arriving to Machu Picchu after trekking the Inca trail for four days",
    width: 4,
  },
  {
    thumbnail: thumb8,
    src: img8,
    caption: "Argentina. Perito Moreno glacier",
    width: 4,
  },
  { thumbnail: thumb9, src: img9, caption: "Argentina. The Iguazu falls", width: 6 },
  {
    thumbnail: thumb10,
    src: img10,
    caption: "Jordan. Sunrise after camping in the Wadi Rum desert",
    width: 6,
  },
];

const AboutMe = () => {
  return (
    <Fragment>
      <Section compactBottom data-testid="as-a-professional">
        <div className="row">
          <div className="col-lg-12">
            <div className={classes.text}>
              <h4>As a professional</h4>
              <p>
                Always passionate about technology, I guided my professional career by a motto:{" "}
                <b>
                  &quot;Choose a job you love, and you will never have to work a day in your
                  life&quot;
                </b>
                . I think I got it. But this doesn&apos;t mean that I like the immobility nor that
                I think I have earned all, quite the opposite. I realized that one of the things I
                love about software engineering is that it is in continuous evolution, and that
                forces me to face new challenges continually and to solve new problems using a
                great variety of new tools, so I have to be in continuous learning.
              </p>
              <p>
                I like to be on the bleeding edge about the technologies I use, but always
                maintaining focus over solving the problem. It´s necessary to make coexist the
                creativity and the practicality, and that´s the key for me. I consider myself
                methodic, meticulous and even perfectionist, but this does not make distract me
                about &quot;getting things done&quot;. I consider that my job is to solve problems
                in which many variables come into play: Scalability, modularity, performance,
                readability, maintainability, delivery times... and so on. For me this is really
                exciting, I love to find the correct balance between all these concepts for the
                problem, and then solve it in the most optimal way possible.
              </p>
              <p>
                Leaving aside the technical part, the front end development allows me to be in
                touch with the most visible part of an application, what users ultimately get to
                touch and feel. So It makes possible not to leave completely my designer role, and
                allows me to get involved in the user experience. Both of these are areas that
                always have given me great satisfactions too.
              </p>
              <p>
                The evolution of the front-end development has brought to me again the server-side
                technologies (which I used during my initial career for a long time) making me to
                achieve great skills in Node.js, end-to-end testing and continuous integration
                tools.
              </p>
            </div>
          </div>
        </div>
        <div className={clsx("row", classes.images)}>
          <ImageGalleryItem alignLeft alt="Working" src={jobImage2} width={4} />
          <ImageGalleryItem alt="Coding" src={jobImage3} width={4} />
          <ImageGalleryItem alt="Architecture design" src={jobImage1} width={4} />
        </div>
      </Section>
      <Section compactTop data-testid="personal-life" separator>
        <div className="row">
          <div className="col-lg-12">
            <div className={classes.text}>
              <h4>In my personal life</h4>
              <p>
                Despite the fact I was born in a big city, I spent most time of my childhood and
                adolescence in a little village in the countryside, being in contact with the
                nature, taking care of the vegetable garden and farm animals with my grandfather,
                going fishing, etc. A lot of time has passed since those days, things change, and
                nowadays I spend the most part of my time in front of a computer screen, but I
                still love animals, adventures and nature. That&apos;s why I love to travel,
                specially to countries and places where it is still possible to enjoy the nature or
                learning about different cultures.
              </p>
              <p>
                I recently reached an old dream, and moved to a village at the border of the city,
                bigger than the village of my childhood, but quiet enough. This has allowed me to
                have animals and take care of a garden again, and these are things that give me a
                lot of peace after a hard working day. In general lines, I like a lot to work with
                my hands, and I always have a lot of opened &quot;side projects&quot;, usually
                woodworks projects, but also brickworks projects, etc. The worst part about this is
                that I am just as meticulous and perfectionist in these projects as on my
                professional ones, so I&apos;m always very busy, but, again, I don&apos;t mind
                because I love it.
              </p>
              <p>
                I also love to read. Apart of reading a lot of technical books I read about many
                different themes and genres, and but I specially like books about history,
                historical novels, comics and travel books. And, that&apos;s my other passion:
                travelling. This avocation made me get another hobby: the photography, and
                honestly, this is something in which I&apos;d like to improve, because I usually
                only practice it during my travels, but, unfortunately, the time is a limited
                resource... 😉
              </p>
            </div>
          </div>
        </div>
        <ImagesGallery
          className={classes.images}
          data-testid="personal-life-gallery"
          images={images}
        />
      </Section>
    </Fragment>
  );
};

export default AboutMe;
