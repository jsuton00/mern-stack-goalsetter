import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaUser } from 'react-icons/fa';
import { MdAlternateEmail, MdPassword } from 'react-icons/md';
import { register, reset } from '../store/reducers/auth';
import { validateRegisterForm } from '../utils/validateForm';
import Loader from './Loader';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const { name, email, password, confirmPassword } = formData;

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate('/goals');
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    e.persist();
    return setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setErrors(validateRegisterForm(formData));

    if (Object.keys(errors).length === 0) {
      setIsSubmitted(true);

      if (password !== confirmPassword) {
        toast.error('Passwords do not match.');
      } else {
        const userData = { name, email, password };
        dispatch(register(userData));
      }
    } else {
      console.log(errors);
    }

    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <form
      name="register-form"
      onSubmit={onSubmit}
      className="form register-form"
    >
      <div className="register-form-row name-input-section">
        <input
          name="name"
          type="text"
          placeholder="Name"
          onChange={onChange}
          value={name}
        />
        <span className="register-form-input-icon">
          <FaUser />
        </span>
        {isSubmitted && errors.name && (
          <p className="invalid-feedback">{errors.name}</p>
        )}
      </div>
      <div className="register-form-row email-input-section">
        <input
          name="email"
          type="text"
          placeholder="E-mail"
          onChange={onChange}
          value={email}
        />
        <span className="register-form-input-icon">
          <MdAlternateEmail />
        </span>
        {isSubmitted && errors.email && (
          <p className="invalid-feedback">{errors.email}</p>
        )}
      </div>
      <div className="register-form-row password-input-section">
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={onChange}
          value={password}
        />
        <span className="register-form-input-icon">
          <MdPassword />
        </span>
        {isSubmitted && errors.password && (
          <p className="invalid-feedback">{errors.password}</p>
        )}
      </div>
      <div className="register-form-row confirm-password-input-section">
        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm password"
          onChange={onChange}
          value={confirmPassword}
        />
        <span className="register-form-input-icon">
          <MdPassword />
        </span>
        {isSubmitted && errors.confirmPassword && (
          <p className="invalid-feedback">{errors.confirmPassword}</p>
        )}
      </div>
      <div className="register-form-row form-submit-section">
        <button type="submit" className="btn btn-primary btn-submit">
          Register
        </button>
      </div>
      <div className="register-form-row switch-form-section">
        <p className="switch-form-text">
          You have an account?{' '}
          <Link to="/login">
            <span className="switch-form-link">Log in!</span>
          </Link>
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;
