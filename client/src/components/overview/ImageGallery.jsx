/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import GalleryThumbnails from './GalleryThumbnails.jsx';

const ImageGallery = ({ photos, alt }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [topIndex, setTopIndex] = useState(0);
  const canScrollLeft = imageIndex > 0;
  const canScrollRight = imageIndex < (photos.length - 1);
  const goLeft = () => {
    if (imageIndex === topIndex) {
      setTopIndex((i) => i - 1);
    }
    setImageIndex((i) => i - 1);
  };

  const goRight = () => {
    if ((imageIndex - 6) >= topIndex) {
      setTopIndex((i) => i + 1);
    }
    setImageIndex((i) => i + 1);
  };

  return (
    <div className="ov-image-gallery">
      <img className="ov-main-gallery-image" src={photos[imageIndex].url} alt={alt} />
      {canScrollLeft
        ? (
          <img
            src="icons/left.svg"
            alt="left"
            onClick={goLeft}
            className="ov-gallery-left"
          />
        ) : null}
      {canScrollRight
        ? (
          <img
            src="icons/right.svg"
            alt="right"
            onClick={goRight}
            className="ov-gallery-right"
          />
        ) : null}

      <GalleryThumbnails
        photos={photos}
        chooseThumbnail={setImageIndex}
        imageIndex={imageIndex}
        topIndex={topIndex} setTopIndex={setTopIndex}
      />
    </div>
  );
};

export default ImageGallery;
