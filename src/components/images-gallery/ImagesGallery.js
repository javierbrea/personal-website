/*
Copyright 2020 Javier Brea

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

import { Fragment, useState, useCallback } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import PropTypes from "prop-types";
import clsx from "clsx";

import ImageGallery from "components/image-gallery";

const ImagesGallery = ({ className, images, "data-testid": dataTestid }) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(null);

  const toggleModal = useCallback(
    (id) => {
      setIndex(id);
      setOpen(!open);
    },
    [open, setOpen]
  );

  return (
    <Fragment>
      <ModalGateway>
        {open ? (
          <Modal onClose={toggleModal}>
            <Carousel currentIndex={index} views={images} />
          </Modal>
        ) : null}
      </ModalGateway>
      <div className={clsx("row", className)} data-testid={dataTestid}>
        {images.map((image, index) => {
          return (
            <ImageGallery
              alt={image.caption}
              data-testid={`${dataTestid}-${index}`}
              id={index}
              key={image.thumbnail}
              onClick={toggleModal}
              src={image.thumbnail}
              width={image.width}
            />
          );
        })}
      </div>
    </Fragment>
  );
};

ImagesGallery.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  "data-testid": PropTypes.string,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      thumbnail: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      caption: PropTypes.string.isRequired,
    })
  ),
};

export default ImagesGallery;
