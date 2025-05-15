// backend/routes/goldRoutes.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Gold routes working');
});

module.exports = router;
