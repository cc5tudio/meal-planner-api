const express = require('express');
const router = express.Router();

// Dummy Recipe Data
const recipes = [
  { recipe_id: '201', title: 'Grilled Chicken Salad', nutrition_info: { calories: 400, protein: 30, carbs: 15 } },
  { recipe_id: '202', title: 'Protein Smoothie', nutrition_info: { calories: 200, protein: 25, carbs: 10 } }
];

// Get all recipes
router.get('/recipes', (req, res) => {
  res.json(recipes);
});

// Get recipe by ID
router.get('/recipes/:id', (req, res) => {
  const recipe = recipes.find(r => r.recipe_id === req.params.id);
  if (recipe) res.json(recipe);
  else res.status(404).json({ message: 'Recipe not found' });
});

module.exports = router;

