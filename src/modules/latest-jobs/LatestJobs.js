/*
Copyright 2020 Javier Brea

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/
import MainTitle from "components/main-title";

import Column from "./Column";

import JobItem from "./JobItem";

import telefonicaImage from "images/projects/telefonica.jpg";
import orangeImage from "images/projects/orange.jpg";
import ingImage from "images/projects/ing.jpg";

const LatestJobs = () => {
  return (
    <>
      <MainTitle
        subtitle="Companies in which I have been working on my latest projects"
        title="Latest Jobs"
      />
      <div className="row">
        <Column>
          <JobItem
            dates="2019/present"
            description="Front-end architect"
            image={telefonicaImage}
            imageAlt="Telefónica"
            title="Telefónica I+D"
            to="https://telefonicatech.com/"
          />
        </Column>
        <Column>
          <JobItem
            dates="2018/2019"
            description="Front-end architect"
            image={orangeImage}
            imageAlt="Orange"
            title="XByOrange"
            to="https://blog.orange.es/empresas/orange-crea-x-by-orange/"
          />
        </Column>
        <Column odd>
          <JobItem
            dates="2013/2018"
            description="Front-end architect"
            image={ingImage}
            imageAlt="ING"
            title="ING"
            to="https://www.ing.es/"
          />
        </Column>
      </div>
    </>
  );
};

export default LatestJobs;
