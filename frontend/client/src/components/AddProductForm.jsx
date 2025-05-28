import React, { useState } from 'react';

const AddProductForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !price) {
      alert('Please enter both name and price.');
      return;
    }

    fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, price: Number(price) }),
    })
      .then(res => res.json())
      .then(data => {
        alert(`Product "${data.name}" added successfully!`);
        setName('');
        setPrice('');
      })
      .catch(err => alert('Error adding product'));
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '2rem' }}>
      <h2>Add New Product</h2>
      <div>
        <label>Product Name:</label><br />
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Enter product name"
          required
        />
      </div>
      <div>
        <label>Price (₹):</label><br />
        <input
          type="number"
          value={price}
          onChange={e => setPrice(e.target.value)}
          placeholder="Enter price"
          required
          min="1"
        />
      </div>
      <button type="submit" style={{ marginTop: '1rem', backgroundColor: '#D99201', color: 'black', padding: '0.5rem 1rem', border: 'none', borderRadius: '4px' }}>
        Add Product
      </button>
    </form>
  );
};

export default AddProductForm;
