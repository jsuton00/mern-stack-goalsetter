import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Goals from '../components/Goals';
import GoalsForm from '../components/GoalsForm';

const GoalsPage = () => {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <div className="goals-page container">
      <div className="goals-page-content">
        <h1 className="goals-page-heading heading">
          {user ? `${user.name}'s` : ''} Goals
        </h1>
        <GoalsForm />
        <div className="goals-page-list-container goals">
          <Goals />
        </div>
      </div>
    </div>
  );
};

export default GoalsPage;
