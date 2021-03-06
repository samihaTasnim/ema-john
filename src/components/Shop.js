import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../fakeData';
import Product from './Product';
import Cart from './Cart';
import { addToDatabaseCart, getDatabaseCart } from '../databaseManager';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
  const data = fakeData.slice(0, 10)
  const [product, setProduct] = useState(data)
  const [cart, setCart] = useState([])

  useEffect(() => {
    const savedCart = getDatabaseCart()
    console.log(savedCart);
    const productKeys = Object.keys(savedCart)
    const previousCart = productKeys.map(existingKey => {
      const product = fakeData.find(x => x.key === existingKey)
      product.quantity = savedCart[existingKey]
      return product;
    })
    setCart(previousCart)
  }, [])
  
  const handleAddToCart = (product) => {
    const sameProduct = cart.find(x => x.key === product.key)
    let count = 1
    let newCart;
    if(sameProduct) {
      count = sameProduct.quantity + 1
      sameProduct.quantity = count
      const otherProduct = cart.filter(x => x.key !== product.key)
       newCart = [...otherProduct, sameProduct]
    }
    else {
      product.quantity = 1;
      newCart = [...cart, product]
    }
    setCart(newCart);
    addToDatabaseCart(product.key, count)
  };

  return (
    <div className="container">
      <div className="product-all">
        {product.map(pd => <Product product={pd} key={pd.key} showAddToCart={true}handleAddToCart={handleAddToCart}></Product>)}
      </div>
      <div className="cart">
       <Cart cart={cart}>
        <Link to="/review"><button className="add-to-cart">Review Cart</button></Link>
       </Cart>
      </div>
    </div>
  );
};

export default Shop;