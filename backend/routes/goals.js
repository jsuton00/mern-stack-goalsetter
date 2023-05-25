const express = require('express');
const router = express.Router();
const {
  getGoals,
  getGoal,
  setGoal,
  updateGoal,
  deleteGoal,
  deleteGoals,
} = require('../controllers/goals');

const { protect } = require('../middleware/auth');

router
  .route('/')
  .get(protect, getGoals)
  .post(protect, setGoal)
  .delete(protect, deleteGoals);
router
  .route('/:id')
  .delete(protect, deleteGoal)
  .put(protect, updateGoal)
  .get(protect, getGoal);

module.exports = router;
