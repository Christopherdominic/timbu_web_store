import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="logo">Amiable Store</div>
      <nav>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/checkout">Checkout</NavLink>
        <NavLink to="/faq">FAQ</NavLink>
      </nav>
    </header>
  );
};

export default Header;
