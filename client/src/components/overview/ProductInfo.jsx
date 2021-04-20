/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

// eslint-disable-next-line arrow-body-style

const getRatingCount = (ratings) => Object.values(ratings)
  .reduce((sum, n) => sum + Number(n), 0);

const getAverageRating = (ratings) => {
  const ratingSum = Object.entries(ratings)
    .reduce((sum, [rating, count]) => sum + rating * count, 0);
  const count = getRatingCount(ratings);
  return (ratingSum / count).toFixed(1);
};

const ProductInfo = ({ info, ratings }) => {
  const ratingCount = getRatingCount(ratings);

  return (
    <div className="ov-product-info">
      <div>
        {ratingCount > 0
          ? (
            <>
              <span>{`Star Rating: ${getAverageRating(ratings)}`}</span>
              <a href="#">
                {' '}
                {`Read all ${ratingCount} reviews`}
                {' '}
              </a>
            </>
          )
          : null}
      </div>
      <div>
        <h4 className="ov-category">{info.category}</h4>
      </div>
      <div>
        <h2>{info.name}</h2>
      </div>
      <div>
        {`$${info.default_price}`}
      </div>
      <div>
        <br />
        <em>Share on Social media</em>
      </div>
    </div>
  );
};

export default ProductInfo;
