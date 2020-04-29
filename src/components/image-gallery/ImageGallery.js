/*
Copyright 2020 Javier Brea

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

import React, { useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import classes from "./imageGallery.module.scss";

const ImageGallery = ({ width, src, onClick, id }) => {
  const style = useMemo(() => {
    return {
      background: `url(${src})`
    };
  }, [src]);
  const handleClick = useCallback(() => {
    if (onClick) {
      onClick(id);
    }
  }, [onClick, id]);

  return (
    <div className={clsx(`col-md-${width}`, !!onClick && classes.clickable)} onClick={handleClick}>
      <a className={classes.link}>
        <div className={classes.imageContainer} style={style}></div>
      </a>
    </div>
  );
};

ImageGallery.propTypes = {
  id: PropTypes.string,
  onClick: PropTypes.func,
  src: PropTypes.string,
  width: PropTypes.oneOf(["4", "6"])
};

export default ImageGallery;
