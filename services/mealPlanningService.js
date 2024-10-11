const express = require('express');
const router = express.Router();

// Dummy Meal Plan Data
const mealPlans = [
  { meal_plan_id: '101', user_id: '1', meal_plan_name: 'Weight Loss Plan', meals: ['Salad', 'Chicken', 'Smoothie'] },
  { meal_plan_id: '102', user_id: '2', meal_plan_name: 'Muscle Gain Plan', meals: ['Steak', 'Eggs', 'Protein Shake'] }
];

// Get all meal plans
router.get('/meal-plans', (req, res) => {
  res.json(mealPlans);
});

// Get meal plan by ID
router.get('/meal-plans/:id', (req, res) => {
  const mealPlan = mealPlans.find(mp => mp.meal_plan_id === req.params.id);
  if (mealPlan) res.json(mealPlan);
  else res.status(404).json({ message: 'Meal plan not found' });
});

module.exports = router;

