// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of Express
const app = express();

// Set up middleware
app.use(bodyParser.json());

// Define routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
