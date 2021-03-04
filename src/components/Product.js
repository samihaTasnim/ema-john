import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';
import icon from './shopping-cart.svg';

const Product = (props) => {
  const { name, img, price, seller, stock , key} = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt=""/>
      </div>
      <div className="product-info">
        <p> <Link to={"/product/" + key}>{name}</Link> </p>
        <p>{price}</p>
        <p><small>by: {seller}</small></p>
        <p>${price}</p>
        <p><small>Only {stock} left in stock -Order soon.</small></p>
        { props.showAddToCart && <button className="add-to-cart" onClick={() => props.handleAddToCart(props.product)}><img src={icon} alt="" className="cart-icon"/> Add to cart</button>}
      </div>
    </div>
  );
};

export default Product;