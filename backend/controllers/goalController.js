// @desc Get goals
// @route GET /api/goals
// @access private

const getGoals = (req, res) => {
  res.status(200).json({ message: "Get goals" });
};

// @desc Set goal
// @route POST /api/goals
// @access private

const setGoal = (req, res) => {
    res.status(200).json({message : "Set goal"})
  };

// @desc Update goal
// @route PUT /api/goal/:id
// @access private

const updateGoal = (req, res) => {
    res.status(200).json({message : `Update Goal ${req.params.id}`})
  };

// @desc Delete goal
// @route DELETE /api/goal/:id
// @access private

const deleteGoal = (req, res) => {
    res.status(200).json({message : `Delete Goal ${req.params.id}`})
  };

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal
};
