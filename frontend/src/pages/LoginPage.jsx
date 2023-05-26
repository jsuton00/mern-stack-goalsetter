import React from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  return (
    <div className="login-page container">
      <div className="login-page-content">
        <h1 className="login-page-heading heading">Login</h1>
        <div className="login-page-form-container">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
