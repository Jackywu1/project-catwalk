/* eslint-disable radix */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import IndividualStarBar from './Individual-Star-Bar.jsx';

const Breakdown = ({ ratings }) => {
  let mostRatings = 0;

  Object.values(ratings).forEach((rating) => {
    if (parseInt(rating) > mostRatings) {
      mostRatings = parseInt(rating);
    }
  });

  return Object.entries(ratings).slice().reverse().map((rating) => {
    const [key, value] = rating;

    return (
      <div key={Math.random() * 1000000}>
        <IndividualStarBar
          star={parseInt(key)}
          counts={parseInt(value)}
          max={mostRatings}
        />
      </div>
    );
  });
};

Breakdown.propTypes = {
  ratings: PropTypes.object.isRequired,
};

export default Breakdown;
