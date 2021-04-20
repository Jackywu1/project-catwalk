/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable semi */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

const range = (n) => [...new Array(n)].map((_, idx) => idx + 1);

const AddToCart = ({ style }) => {
  const { skus } = style;
  const availableSkus = Object.entries(skus)
    .filter(([id, sku]) => sku.quantity > 0);

  const [clicked, setClicked] = useState(false);
  const [size, setSize] = useState(null);
  const [sku, setSku] = useState(null);

  const [quantity, setQuantity] = useState(null);

  const onSizeChoice = (id) => {
    setSku(skus[id]);
    setQuantity(skus[id].quantity);
  };

  useEffect(() => console.log('quantityAvailable', quantity,
    'sku', sku));

  return (
    <div className="ov-add-to-cart">
      <form>
        <select
          className="ov-cart-size"
          name="size"
          value={size}
          onChange={(e) => onSizeChoice(e.target.value)}
          onClick={() => setClicked(true)}
        >
          {clicked
            ? availableSkus.map((s) => (
              <option key={s[0]} value={s[0]}>{s[1].size}</option>
            ))
            : sku
              ? <option value={sku[1].size}>{sku[1].size}</option>
              : <option value="Select Size">Select Size</option>}
        </select>

        <select className="ov-cart-quantity" name="quantity">
          {quantity
            ? range(quantity).map((n) => (
              <option value="{n}">{n}</option>
            ))
            : (<option value="-">-</option>)}
        </select>

        <button className="ov-cart-add" type="button">Add To Bag</button>

        <button className="ov-cart-like" type="button">*</button>
      </form>
    </div>
  );
};

export default AddToCart;
