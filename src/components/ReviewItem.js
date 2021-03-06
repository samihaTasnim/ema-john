import React from 'react';

const ReviewItem = (props) => {
const {name, quantity, price, img, key} = props.product;
  return (
    <div>
      <img src={img} alt=""/>
      <div className="product-info">
      <h3>{name}</h3>
      <p>Quantity: {quantity}</p>
      <p>Price: {price}</p>
      <button className="add-to-cart" onClick={() => props.handleClick(key)}>Remove</button>
      </div>
    </div>
  );
};

export default ReviewItem;