// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import CORS module

// Create an instance of Express
const app = express();
app
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use('/', require('./routes'));

// Define models
const db = require('./models');
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

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
