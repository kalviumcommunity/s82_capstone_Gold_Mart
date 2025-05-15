import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ padding: '1rem', background: '#D99201', color: '#fff' }}>
    <h1>GoldMart</h1>
    <div>
      <Link to="/" style={{ marginRight: '1rem', color: 'white' }}>Home</Link>
      <Link to="/add-product" style={{ color: 'white' }}>Add Product</Link>
    </div>
  </nav>
);

export default Navbar;
