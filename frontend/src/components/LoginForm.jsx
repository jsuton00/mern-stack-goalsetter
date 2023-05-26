import React, { useState, useEffect } from 'react';
import { validateLoginForm } from '../utils/validateForm';
import { Link } from 'react-router-dom';
import { MdAlternateEmail, MdPassword } from 'react-icons/md';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState('');

  const { email, password } = formData;

  const onChange = (e) => {
    e.persist();
    return setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setErrors(validateLoginForm(formData));

    if (Object.keys(errors).length === 0) {
      setIsSubmitted(true);
    } else {
      console.log(errors);
    }

    setFormData({
      email: '',
      password: '',
    });
  };

  return (
    <form name="login-form" onSubmit={onSubmit} className="form login-form">
      <div className="login-form-row email-input-section">
        <input
          name="email"
          type="text"
          placeholder="E-mail"
          className="form-input"
          onChange={onChange}
          value={email}
        />
        <span className="login-form-input-icon">
          <MdAlternateEmail />
        </span>
        {isSubmitted && errors.email && (
          <p className="invalid-feedback">{errors.email}</p>
        )}
      </div>
      <div className="login-form-row password-input-section">
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="form-input"
          onChange={onChange}
          value={password}
        />
        <span className="login-form-input-icon">
          <MdPassword />
        </span>
        {isSubmitted && errors.password && (
          <p className="invalid-feedback">{errors.password}</p>
        )}
      </div>
      <div className="login-form-row form-submit-section">
        <button type="submit" className="btn btn-primary btn-submit">
          Login
        </button>
      </div>
      <div className="login-form-row switch-form-section">
        <p className="switch-form-text">
          Create a new account?{' '}
          <Link to="/">
            <span className="switch-form-link">Register!</span>
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
