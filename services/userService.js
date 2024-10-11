const express = require('express');
const router = express.Router();

// Dummy User Data
const users = [
  { user_id: '1', name: 'John Doe', email: 'john@example.com', role: 'Individual' },
  { user_id: '2', name: 'Jane Doe', email: 'jane@example.com', role: 'Nutritionist' }
];

// Get all users
router.get('/users', (req, res) => {
  res.json(users);
});

// Get user by ID
router.get('/users/:id', (req, res) => {
  const user = users.find(u => u.user_id === req.params.id);
  if (user) res.json(user);
  else res.status(404).json({ message: 'User not found' });
});

module.exports = router;

