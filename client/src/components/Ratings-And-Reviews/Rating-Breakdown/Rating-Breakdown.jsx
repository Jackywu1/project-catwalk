/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import RatingSummary from './Rating-Summary.jsx';
import Breakdown from './Breakdown.jsx';
import ProductBreakdown from './Product-Breakdown.jsx';

class RatingBreakdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const { data } = this.props;

    return (
      <div className="rr-rating-breakdown">
        <RatingSummary data={data} />
        <Breakdown data={data} />
        <ProductBreakdown />
      </div>
    );
  }
}

RatingBreakdown.propTypes = {
  data: PropTypes.array.isRequired,
};

export default RatingBreakdown;
