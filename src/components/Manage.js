import React from 'react';

const Manage = () => {
  const handleAddProduct = () => {
    const product = {}
    fetch('http://localhost:5000/addProduct', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(product)
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  return (
    <div>
      <form action="">
        <p><span>Name:</span><input type="text"/></p>
        <p><span>Quantity:</span><input type="text"/></p>
        <p><span>Price:</span><input type="text"/></p>
        <p><span>Product image:</span><input type="file"/></p>
      </form>
      <button onClick={handleAddProduct}>Add product</button>
    </div>
  );
};

export default Manage;