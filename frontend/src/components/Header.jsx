import React from 'react';
import { FaSignInAlt, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header-row container">
        <div className="header-logo">
          <Link to="/" className="logo-link">
            Goalsetter
          </Link>
        </div>
        <div className="header-nav">
          <div className="header-nav-item">
            <Link to="/" className="header-nav-item-link">
              <FaSignInAlt />
              Register
            </Link>
          </div>
          <div>
            <Link to="/login" className="header-nav-item-link">
              <FaUser /> Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
