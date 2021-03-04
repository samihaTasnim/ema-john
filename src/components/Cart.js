import React from 'react';

const Cart = (props) => {
  console.log(props.cart);

   const total = props.cart.reduce((total, current) => total + current.price, 0)
   let shipping = 12.99;
   if(total > 75 ){
    shipping = 0;
   }
   else if(props.cart.length === 0) {
     shipping = 0;
   }

   let subTotal = shipping + total
  return (
    <div>
      <h4>Order Summery</h4>
      <p>Items ordered: {props.cart.length}</p>
      <p><small> Total Price: ${total.toFixed(2)}</small></p>
      <p><small>Shipping fee: ${shipping}</small></p>
      <p><small>Estimated total: ${subTotal.toFixed(2)}</small></p>
    </div>
  );
};

export default Cart;