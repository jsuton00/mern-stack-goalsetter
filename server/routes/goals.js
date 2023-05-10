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

router.route('/').get(getGoals).post(setGoal).delete(deleteGoals);
router.route('/:id').delete(deleteGoal).put(updateGoal).get(getGoal);

module.exports = router;
