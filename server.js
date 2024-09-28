const express = require('express');
const path = require('path');
const htmlRoutes = require('./server/routes/htmlRoutes.js');
const apiRoutes = require('./server/routes/apiRoutes.js');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'client', 'dist')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route handlers
app.use(htmlRoutes);
app.use(apiRoutes);

// Start server
app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
