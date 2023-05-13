const handleAsync = require('express-async-handler');
const Goals = require('../models/goals');

// @desc    Get goals
// @route   GET /api/goals
// @access  Private

const getGoals = handleAsync(async (req, res) => {
  const goals = await Goals.find();
  res.status(200).json(goals);
});

// @desc    Get goal
// @route   GET /api/goals/:id
// @access  Private

const getGoal = handleAsync(async (req, res) => {
  const goal = await Goals.findById(req.params.id);
  // Check for the selected goal
  if (!goal) {
    res.status(400);
    throw new Error('The selected goal is not found.');
  }
  res.status(200).json(goal);
});

// @desc    Set goal
// @route   POST /api/goals/
// @access  Private

const setGoal = handleAsync(async (req, res) => {
  // Check for required parameters
  if (!req.body.title) {
    res.status(400);
    throw new Error('Please add text');
  }

  const goal = await Goals.create({
    title: req.body.title,
    description: req.body.description,
  });

  res.status(201).json(goal);
});

// @desc    Update goal
// @route   PUT /api/goals/:id
// @access  Private

const updateGoal = handleAsync(async (req, res) => {
  const goal = await Goals.findById(req.params.id);

  // Check for the selected goal
  if (!goal) {
    res.status(400);
    throw new Error('The selected goal is not found.');
  }

  const updatedGoal = await Goals.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json(updatedGoal);
});

// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private

const deleteGoal = handleAsync(async (req, res) => {
  const goal = await Goals.findById(req.params.id);

  // Check for the selected goal
  if (!goal) {
    res.status(400);
    throw new Error('The selected goal is not found.');
  }

  await goal.deleteOne();
  res.status(200).json({ id: req.params.id });
});

// @desc    Delete goals
// @route   DELETE /api/goals/
// @access  Private

const deleteGoals = handleAsync(async (req, res) => {
  const goals = await Goals.deleteMany();

  const deleteGoals = await Goals.find();
  res.status(200).json(deleteGoals);
});

module.exports = {
  getGoals,
  getGoal,
  setGoal,
  updateGoal,
  deleteGoal,
  deleteGoals,
};
