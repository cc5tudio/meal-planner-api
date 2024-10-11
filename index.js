const express = require('express');
const app = express();
const port = 3000;

// Import services
const userService = require('./services/userService');
const mealPlanningService = require('./services/mealPlanningService');
const recipeService = require('./services/recipeService');
const groceryListService = require('./services/groceryListService');
const progressTrackingService = require('./services/progressTrackingService');

// Use service routes
app.use('/api', userService);
app.use('/api', mealPlanningService);
app.use('/api', recipeService);
app.use('/api', groceryListService);
app.use('/api', progressTrackingService);

// Start the server
app.listen(port, () => {
  console.log(`Meal planning app running at http://localhost:${port}`);
});

