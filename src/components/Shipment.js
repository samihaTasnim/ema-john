import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../App'
import { useForm } from 'react-hook-form';
import { getDatabaseCart, processOrder } from '../databaseManager';

const Shipment = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const savedCart = getDatabaseCart()
    const onSubmit = data => {
      const cartDetail = {...loggedInUser, products: savedCart, shipment: data, orderTime: new Date()}
      fetch('http://localhost:5000/addOrder', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(cartDetail)
      })
      .then(res => res.json())
      .then(data => {
        processOrder()
        alert('order placed successfully')
      })
    }
  
  
    return (
      <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
      <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name" />
      {errors.name && <span className="error">Name is required</span>}
     
      <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })}  placeholder="Your Email"/>
      {errors.email && <span className="error">Email is required</span>}
     
      <input name="address" ref={register({ required: true })}  placeholder="Your Address" />
      {errors.address && <span className="error">Address is required</span>}
     
      <input name="phone" ref={register({ required: true })}  placeholder="Your Phone Number"/>
      {errors.phone && <span className="error">Phone Number is required</span>}
      
      <input type="submit" />
    </form>
    );
}
export default Shipment;