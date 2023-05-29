import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import goalsActions from '../actions/goals';

const initialState = {
  goals: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const goals = createSlice({
  name: 'goals',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {},
});

export const { reset } = goals.actions;

export default goals.reducer;
