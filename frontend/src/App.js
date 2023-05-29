import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import GoalsPage from './pages/GoalsPage';
import GoalDetailsPage from './pages/GoalDetailsPage';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <Router>
        <ToastContainer />
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/goals" element={<GoalsPage />} />
            <Route path="/goals/:id" element={<GoalDetailsPage />} />
          </Routes>
        </main>
      </Router>
    </>
  );
};

export default App;
