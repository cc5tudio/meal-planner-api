const express = require('express');
const router = express.Router();

// Dummy Grocery List Data
const groceryLists = [
  { grocery_list_id: '301', meal_plan_id: '101', items: ['Lettuce', 'Chicken', 'Yogurt'] },
  { grocery_list_id: '302', meal_plan_id: '102', items: ['Steak', 'Eggs', 'Milk'] }
];

// Get all grocery lists
router.get('/grocery-lists', (req, res) => {
  res.json(groceryLists);
});

// Get grocery list by ID
router.get('/grocery-lists/:id', (req, res) => {
  const groceryList = groceryLists.find(gl => gl.grocery_list_id === req.params.id);
  if (groceryList) res.json(groceryList);
  else res.status(404).json({ message: 'Grocery list not found' });
});

module.exports = router;

