import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../fakeData';
import Product from './Product';
import Cart from './Cart';

const Shop = () => {
  const data = fakeData.slice(0, 10)
  const [product, setProduct] = useState(data)
  const [cart, setCart] = useState([])

  const handleAddToCart = (product) => {
    const newCart = [...cart, product]
    setCart(newCart);
  };

  return (
    <div className="container">
      <div className="product-all">
        {product.map(pd => <Product product={pd} key={pd.key} showAddToCart={true}handleAddToCart={handleAddToCart}></Product>)}
      </div>
      <div className="cart">
       <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;