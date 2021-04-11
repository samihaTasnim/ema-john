import React from 'react';
import Product from './Product';
import './../fakeData'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';

const ProductDetails = () => {
  const [product, setproduct] = useState({})
  const {productKey} = useParams()
  useEffect(() => {
    fetch(`https://mighty-shore-59511.herokuapp.com/products/${productKey}`)
    .then(res => res.json())
    .then(data => setproduct(data))
  },[productKey])
  return (
    <div>
      <h4>Details of your choosen product</h4>
      { <Product product={product} showAddToCart={false}></Product>}
    </div>
  );
};

export default ProductDetails;