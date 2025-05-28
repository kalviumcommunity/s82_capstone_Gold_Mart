import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
      <h3>{product.name}</h3>
      <p>Price: ₹{product.price}</p>
    </div>
  );
};

export default ProductCard;
