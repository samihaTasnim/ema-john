import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../App'
import { useForm } from 'react-hook-form';
import { getDatabaseCart, processOrder } from '../databaseManager';
import ProcessPayment from './ProcessPayment';
import { useState } from 'react/cjs/react.development';

const Shipment = () => {
  const { register, handleSubmit, errors } = useForm();
  const [loggedInUser] = useContext(UserContext)
  const [shippingData, setShippingData] = useState(null)
  const savedCart = getDatabaseCart()
  const onSubmit = data => {
    setShippingData(data)
  }

  const handlePaymentSuccess = paymentId => {
    const cartDetail = { ...loggedInUser, products: savedCart, shipment: shippingData, paymentId, orderTime: new Date() }
    fetch('https://mighty-shore-59511.herokuapp.com/addOrder', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cartDetail)
    })
      .then(res => res.json())
      .then(data => {
        processOrder()
        alert('order placed successfully')
      })
  }


  return (
    <div className="row">
      <div className="col-md-6" style={{display: shippingData ? 'none' : 'block'}}>
        <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
          <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name" />
          {errors.name && <span className="error">Name is required</span>}

          <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your Email" />
          {errors.email && <span className="error">Email is required</span>}

          <input name="address" ref={register({ required: true })} placeholder="Your Address" />
          {errors.address && <span className="error">Address is required</span>}

          <input name="phone" ref={register({ required: true })} placeholder="Your Phone Number" />
          {errors.phone && <span className="error">Phone Number is required</span>}

          <input type="submit" />
        </form>
      </div>
      <div className="col-md-6" style={{display: shippingData ? 'block' : 'none'}}>
        <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
      </div>
    </div>
  );
}
export default Shipment;