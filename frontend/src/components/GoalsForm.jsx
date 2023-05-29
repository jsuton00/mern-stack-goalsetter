import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { validateGoalsForm } from '../utils/validateForm';
import { useDispatch } from 'react-redux';

const GoalsForm = () => {
  const [formData, setFormData] = useState({ title: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState('');

  const dispatch = useDispatch();

  const { title } = formData;

  const onChange = (e) => {
    e.persist();
    return setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setErrors(validateGoalsForm(formData));

    if (Object.keys(errors).length === 0) {
      setIsSubmitted(true);
      const goalData = { title };
    } else {
      console.log(errors);
    }

    setFormData({
      title: '',
    });
  };

  return (
    <form onSubmit={onSubmit} className="goals-input-container">
      <input
        name="title"
        type="text"
        onChange={onChange}
        className="goals-input"
        placeholder="Create a new goal..."
        value={title}
      />
      <button type="submit" className="goals-input-icon">
        <MdAdd />
      </button>
      {isSubmitted && errors.title && (
        <p className="invalid-feedback">{errors.title}</p>
      )}
    </form>
  );
};

export default GoalsForm;
