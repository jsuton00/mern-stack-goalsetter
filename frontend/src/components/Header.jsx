import React from 'react';
import { FaSignInAlt, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout, reset } from '../store/reducers/auth';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const onClick = () => {
    dispatch(logout);
    dispatch(reset);
    navigate('/');
  };

  return (
    <header className="header">
      <div className="header-row container">
        <div className="header-logo">
          <Link to="/" className="logo-link">
            Goalsetter
          </Link>
        </div>
        {user ? (
          <div className="header-nav">
            <div className="header-nav-item">
              <button className="btn btn-logout" onClick={onClick}>
                <FaSignOutAlt />
                Logout
              </button>
            </div>
          </div>
        ) : (
          <div className="header-nav">
            <div className="header-nav-item">
              <Link to="/login" className="header-nav-item-link">
                <FaSignInAlt />
                Login
              </Link>
            </div>
            <div className="header-nav-item">
              <Link to="/" className="header-nav-item-link">
                <FaUser />
                Register
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
