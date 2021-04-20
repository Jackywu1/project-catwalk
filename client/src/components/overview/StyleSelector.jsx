/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react';

const StyleSelector = ({ styles, index }) => {
  return (
    <div className="ov-style-selector">
      <b>STYLE {'>'} </b>
      <div>- </div>
      {styles.map((style, i) => (
        <div>{i === index
          ? '*'
          : ''}
          {style.name}
        </div>
      ))}
      SELECT SIZE.............QUANTITY
    </div>
  );
};

export default StyleSelector;
