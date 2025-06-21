// Import the Express module
const express = require('express');

// Create an Express app
const app = express();

// Define the port
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Define a basic route
app.get('/', (req, res) => {
  res.send('Hello, World! This is your Node.js app running.');
});

// Optional: Add another route
app.get('/api/status', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running properly' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT})
//hello ayush//
