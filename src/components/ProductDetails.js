import React from 'react';
import Product from './Product';
import './../fakeData'
import { useParams } from 'react-router-dom';
import fakeData from './../fakeData';

const ProductDetails = () => {
  const {productKey} = useParams()
  const product = fakeData.find(x => x.key === productKey)
  return (
    <div>
      <h4>Details of your choosen product</h4>
      { <Product product={product} showAddToCart={false}></Product>}
    </div>
  );
};

export default ProductDetails;