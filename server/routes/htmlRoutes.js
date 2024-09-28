const express = require('express');
const router = express.Router();
const path = require('path');

// Define the route for the homepage
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

// Export the router
module.exports = router; // Use export default for the router
