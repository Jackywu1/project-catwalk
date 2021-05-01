import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GalleryThumbnails from './GalleryThumbnails.jsx';

const ImageGallery = ({
  photos, alt, extendedView, onClick, imageIndex, setImageIndex, exitExtended,
}) => {
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
    <div className={`ov-image-gallery ${extendedView ? 'ov-image-gallery-extended' : ''}`}>
      <img
        className={extendedView ? 'ov-main-gallery-image-extended' : 'ov-main-gallery-image'}
        src={photos[imageIndex].url}
        alt={alt}
        onClick={onClick}
      />

      {canScrollLeft && (
        <img
          src="icons/left.svg"
          alt="left"
          onClick={goLeft}
          className={extendedView ? 'ov-gallery-left-extended' : 'ov-gallery-left'}
        />
      )}
      {canScrollRight && (
        <img
          src="icons/right.svg"
          alt="right"
          onClick={goRight}
          className={extendedView ? 'ov-gallery-right-extended' : 'ov-gallery-right'}
        />
      )}

      <GalleryThumbnails
        photos={photos}
        chooseThumbnail={setImageIndex}
        imageIndex={imageIndex}
        topIndex={topIndex}
        setTopIndex={setTopIndex}
        extendedView={extendedView}
      />
      {extendedView && (
        <img
          className="ov-extended-view-close"
          src="icons/close.svg"
          alt="close"
          onClick={exitExtended}
        />
      )}
    </div>
  );
};

ImageGallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape({
    thumbnail_url: PropTypes.string,
    url: PropTypes.string,
  })).isRequired,
  alt: PropTypes.string.isRequired,
  extendedView: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  imageIndex: PropTypes.number.isRequired,
  setImageIndex: PropTypes.func.isRequired,
  exitExtended: PropTypes.func.isRequired,
};

export default ImageGallery;
