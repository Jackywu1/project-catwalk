import React from 'react';

import IndividualStarBar from './Individual-Star-Bar.jsx';

class Breakdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      starBars: [5, 4, 3, 2, 1],
    };
  }

  render() {
    const { starBars } = this.state;

    return (
      <table>
        {starBars.map((star) => <IndividualStarBar star={star} />)}
      </table>
    );
  }
}

export default Breakdown;
