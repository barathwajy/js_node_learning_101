// module1.js
const express = require('express');
const router = express.Router();

// Define routes for module1
router.get('/process', (req, res) => {
  // Logic to handle processing for module1
  res.send("h1")
  console.log("mssub")
});

module.exports = router;
