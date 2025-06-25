import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h1>GoldMart</h1>
      <Link to="/">Login</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/products">Products</Link>
      <Link to="/camera-upload">Upload via Camera</Link>
    </nav>
  );
}

export default Navbar;
