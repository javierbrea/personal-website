/*
Copyright 2020 Javier Brea

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

import React from "react";
import { Link as GLink } from "gatsby";
import PropTypes from "prop-types";

import LinkExternal from "components/link-external";

const Link = ({ to, children, ...rest }) => {
  const isInternal = to && to.indexOf("/") === 0;
  const LinkComponent = isInternal ? GLink : LinkExternal;

  if (!to) {
    return children;
  }

  return (
    <LinkComponent to={to} {...rest}>
      {children}
    </LinkComponent>
  );
};

Link.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  to: PropTypes.string,
};

export default Link;
