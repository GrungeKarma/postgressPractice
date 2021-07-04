const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Read you loud and clear'
  });
});

module.exports = router;
