import React from 'react';

const Header = () => {
  return (
    <header style={{ background: '#D99201', padding: '1rem', color: 'black' }}>
      <h1>GoldMart</h1>
      <nav>
        <a href="/">Home</a> | <a href="/add-product">Add Product</a>
      </nav>
    </header>
  );
};

export default Header;
