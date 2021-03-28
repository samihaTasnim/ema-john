import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../databaseManager';
import Cart from './Cart';
import ReviewItem from './ReviewItem';
import orderedGiphy from '../images/giphy.gif'
import { useHistory } from 'react-router';

const Review = () => {
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false)
  const history = useHistory()

  const handleplaceOrder = () => {
    // setCart([])
    // setOrderPlaced(true)
    // processOrder()
    history.push('/shipment')
  }

    
    useEffect(() => {
      const savedCart = getDatabaseCart()
      const productKeys = Object.keys(savedCart)
      fetch('http://localhost:5000/productsByKeys', {
        method: 'POST',
        headers: {'Content-Type': "application/json"},
        body: JSON.stringify(productKeys)
      })
      .then(res => res.json())
      .then(data => setCart(data))
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
          <button className='add-to-cart' onClick={handleplaceOrder}>Proceed checkout</button>
        </Cart>
      </div>
    </div>
  );
};

export default Review;