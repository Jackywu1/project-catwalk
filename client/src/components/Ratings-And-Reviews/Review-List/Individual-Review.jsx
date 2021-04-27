/* eslint-disable react/forbid-prop-types */
/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

const IndividualReview = ({ review }) => {
  const {
    rating, reviewer_name, date, summary, body, photos, recommend, response, helpfulness,
  } = review;

  return (
    <div className="rr-review-tile">
      <span>
        Star rating:
        {rating}
        Username:
        {reviewer_name}
        Date:
        {date}
      </span>
      <p>
        Review Summary:
        {summary}
      </p>
      <p>
        Review body:
        {body}
      </p>
      {photos.length > 0
        ? (
          photos.map((photo) => (
            <img className="review-photo" src={photo.url} alt={photo.id} />
          ))
        )
        : null}
      <p>
        Recommended:
        {recommend.toString()}
      </p>
      {response.length > 0
        ? (
          <span>
            Response:
            {response}
          </span>
        )
        : null}
      <p>
        Helpful:
        {helpfulness}
      </p>
      <hr />
    </div>
  );
};

IndividualReview.propTypes = {
  review: PropTypes.object.isRequired,
};

export default IndividualReview;
