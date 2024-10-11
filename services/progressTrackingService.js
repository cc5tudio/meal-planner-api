const express = require('express');
const router = express.Router();

// Dummy Progress Data
const progressLogs = [
  { progress_id: '401', user_id: '1', date: '2023-10-10', weight: 75, adherence_score: 90 },
  { progress_id: '402', user_id: '2', date: '2023-10-11', weight: 80, adherence_score: 85 }
];

// Get all progress logs
router.get('/progress', (req, res) => {
  res.json(progressLogs);
});

// Get progress by user ID
router.get('/progress/:user_id', (req, res) => {
  const userProgress = progressLogs.filter(p => p.user_id === req.params.user_id);
  res.json(userProgress);
});

module.exports = router;

