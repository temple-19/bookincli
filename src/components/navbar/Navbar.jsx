import './navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import React from 'react';

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = () => {
    //to clear cookies
    document.cookie.split(';').forEach(function (c) {
      document.cookie = c
        .replace(/^ +/, '')
        .replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/');
    });
    // Clear local storage
    localStorage.clear();
    // Reload the page
    navigate('/');
    window.location.reload();
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
          <span className="logo">Temple-booking</span>
        </Link>
        {user ? (
          <div className="navItems">
            <span className="usrdis">{user.username}</span>
            <Link
              onClick={logout}
              className="option"
              style={{ color: 'white', textDecoration: 'none' }}
            >
              Logout
            </Link>
          </div>
        ) : (
          <div className="navItems">
            <Link
              to="/register"
              style={{ color: 'white', textDecoration: 'none' }}
            >
              <span className="option">Register</span>
            </Link>
            <Link
              to="/login"
              style={{ color: 'white', textDecoration: 'none' }}
            >
              <span className="option">Login</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
