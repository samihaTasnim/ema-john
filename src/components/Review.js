import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../databaseManager';
import fakeData from '../fakeData';
import Cart from './Cart';
import ReviewItem from './ReviewItem';
import orderedGiphy from '../images/giphy.gif'

const Review = () => {
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false)

  const handleplaceOrder = () => {
    setCart([])
    setOrderPlaced(true)
    processOrder()
  }

  useEffect(() => {
    const savedCart = getDatabaseCart()
    const productKeys = Object.keys(savedCart)
    const cartProducts = productKeys.map(key => {
      const product = fakeData.find(x => x.key === key)
      product.quantity = savedCart[key]
      return product;
    })
    setCart(cartProducts)
  }, [])

  const removeItem = (productKey) => {
    const newCart = cart.filter(pd => pd.key !== productKey)
    setCart(newCart)
    removeFromDatabaseCart(productKey)
  }

  return (
    <div className="container">
      <div className="product-all">
        {cart.length > 0 ? <div><h2>Your cart info</h2><p>Cart Items: {cart.length}</p></div> : null}
        {orderPlaced ? <img src={orderedGiphy} alt=""/> : null}
        {
          cart.map(x => <ReviewItem product={x} handleClick={removeItem}></ReviewItem>)
        }
      </div>
      <div className="cart">
        <Cart cart={cart}>
          <button className='add-to-cart' onClick={handleplaceOrder}>Place order</button>
        </Cart>
      </div>
    </div>
  );
};

export default Review;