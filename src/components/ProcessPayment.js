import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCard from './SimpleCard'

const stripePromise = loadStripe('pk_test_51IeHBfLDFriQTKTtn3KSu1rqdIkhTkqhBXBYG9zyHjyILJhme6TOPkCS8pOEWS2CUKe6DoXhg1RoFkYN4vOslj0z00Jz6tBdGo');

const ProcessPayment = ({handlePayment}) => {
  return (
    <Elements stripe={stripePromise}>
      <SimpleCard handlePayment={handlePayment}></SimpleCard>
    </Elements>
  );
};

export default ProcessPayment;