// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const indexRouter = require('./routes/index');
const db = require('./models'); // Import models

// Create an instance of Express
const app = express();

// Middleware setup
app
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: true }));

// Database connection
db.mongoose.connect(db.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to the database!');
})
.catch((err) => {
  console.log('Cannot connect to the database!', err);
  process.exit();
});

// Define routes
app.use('/', indexRouter);

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
