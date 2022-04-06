/*
Copyright 2020 Javier Brea

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

import WhoAmI from "modules/who-am-i";

import HomeSkills from "modules/home-skills";

const HomeProfile = () => {
  return (
    <div className="row">
      <div className="col-lg-6">
        <WhoAmI />
      </div>
      <div className="col-lg-6">
        <HomeSkills />
      </div>
    </div>
  );
};

export default HomeProfile;
