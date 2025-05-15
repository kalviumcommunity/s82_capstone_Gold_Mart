import React, { useEffect, useState } from 'react';
import ProductCard from './Productcard';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Failed to fetch products:', err));
  }, []);

  return (
    <div>
      <h2>Available Gold Products</h2>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        products.map(product => <ProductCard key={product.id} product={product} />)
      )}
    </div>
  );
};

export default ProductList;
