import { useEffect, useState } from 'react';
import axios from 'axios';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleBuy = (product) => {
    alert(`Initiating GPay for ${product.name}`);
    // Payment integration logic will go here
  };

  return (
    <div>
      <h2>Available Jewelry</h2>
      {products.map((p) => (
        <div key={p._id} style={{ border: '1px solid gray', marginBottom: '10px', padding: '10px' }}>
          <h3>{p.name}</h3>
          <p>{p.description}</p>
          <p>Price: ₹{p.price}</p>
          <p>Rating: ⭐ {p.rating}</p>
          <button onClick={() => handleBuy(p)}>Buy with GPay</button>
        </div>
      ))}
    </div>
  );
}

export default Products;

