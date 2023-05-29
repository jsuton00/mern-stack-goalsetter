import { configureStore } from '@reduxjs/toolkit';
import auth from './reducers/auth';
import goals from './reducers/goals';

const store = configureStore({
  reducer: {
    auth: auth,
    goals: goals,
  },
});

export default store;
