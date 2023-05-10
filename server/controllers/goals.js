const handleAsync = require('express-async-handler');

// @desc    Get goals
// @route   GET /api/goals
// @access  Private

const getGoals = handleAsync(async (req, res) => {
	res.status(200).json({ message: 'All goals served.' });
});

// @desc    Get goal
// @route   GET /api/goals/:id
// @access  Private

const getGoal = handleAsync(async (req, res) => {
	res.status(200).json({ message: `Goal ${req.params.id} served.` });
});

// @desc    Set goal
// @route   POST /api/goals/
// @access  Private

const setGoal = handleAsync(async (req, res) => {
	if (!req.body.text) {
		res.status(400);
		throw new Error('Please add text');
	}
	res.status(201).json({ message: 'Goal set.' });
});

// @desc    Update goal
// @route   PUT /api/goals/:id
// @access  Private

const updateGoal = handleAsync(async (req, res) => {
	res.status(200).json({ message: `Goal ${req.params.id} updated.` });
});

// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private

const deleteGoal = handleAsync(async (req, res) => {
	res.status(200).json({ message: `Goal ${req.params.id} deleted.` });
});

// @desc    Delete goals
// @route   DELETE /api/goals/
// @access  Private

const deleteGoals = handleAsync(async (req, res) => {
	res.status(200).json({ message: 'All goals deleted.' });
});

module.exports = {
	getGoals,
	getGoal,
	setGoal,
	updateGoal,
	deleteGoal,
	deleteGoals,
};
