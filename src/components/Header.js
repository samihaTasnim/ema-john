import React from 'react';
import logo from './logo.png';
import './Header.css';
import { useContext } from 'react';
import { UserContext } from '../App';
import { Link } from 'react-router-dom';

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  return (
    <div className="header">
      <img src={logo} alt=""/>
      <nav>
        <Link to="/shop">Shop</Link>
        <Link to="/review">Review order</Link>
        <Link to="/manage">Manage inventory</Link>
        <button onClick={() => setLoggedInUser({})}>Sign out</button>
      </nav>
    </div>
  );
};

export default Header;