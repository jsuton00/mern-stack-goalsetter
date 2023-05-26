import React from 'react';
import RegisterForm from '../components/RegisterForm';

const RegisterPage = () => {
  return (
    <div className="register-page container">
      <div className="register-page-content">
        <h1 className="register-page-heading heading">Register</h1>
        <div className="register-page-form-container">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
