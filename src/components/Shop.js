import React, { useState } from 'react';
import './Shop.css';
import Product from './Product';
import Cart from './Cart';
import { addToDatabaseCart, getDatabaseCart } from '../databaseManager';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
  const [product, setProduct] = useState([])
  const [cart, setCart] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('https://mighty-shore-59511.herokuapp.com/products?search='+search)
    .then(res => res.json())
    .then(data => {setProduct(data) 
      console.log(data)})
  }, [search])

  

  useEffect(() => {
    const savedCart = getDatabaseCart()
    const productKeys = Object.keys(savedCart)
    fetch('https://mighty-shore-59511.herokuapp.com/productsByKeys', {
      method: 'POST',
      headers: {'Content-Type': "application/json"},
      body: JSON.stringify(productKeys)
    })
    .then(res => res.json())
    .then(data => setCart(data))
  }, [])

  const handleSearch = event =>{
    setSearch(event.target.value);
  }

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
      <div className="d-flex w-50 mx-auto m-5">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onBlur={handleSearch}/>
        <button className="btn btn-outline-primary">Search</button>
      </div>
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