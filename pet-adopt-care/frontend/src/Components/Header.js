import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Pet Adoption Platform</h1>
    <nav>
      <Link to="/">Home</Link> | <Link to="/login">Login</Link> | <Link to="/admin">Admin</Link>
    </nav>
  </header>
);

export default Header;