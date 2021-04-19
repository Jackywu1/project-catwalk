import React from 'react';
import PropTypes from 'prop-types';

const IndividualStarBar = ({ star }) => (
  <tbody>
    <tr>
      <td>
        {star}
        stars
      </td>
      <td>
        bar: star bar placeholder
      </td>
      <td>
        counts: star counts placeholder
      </td>
    </tr>
  </tbody>
);

IndividualStarBar.propTypes = {
  star: PropTypes.number.isRequired,
};

export default IndividualStarBar;
