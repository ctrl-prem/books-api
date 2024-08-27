// server.js

// Import necessary modules
const express = require('express'); 
const bodyParser = require('body-parser'); 
const dotenv = require('dotenv'); 
const connectDB = require('./config/db'); 
const bookRoutes = require('./routes/bookRoutes');

// Load environment variables
dotenv.config();

// Initialize the Express app
const app = express();

// Connect to the MongoDB database
connectDB();

// Middleware
app.use(bodyParser.json()); // Parse incoming JSON requests
app.use('/api/books', bookRoutes); // Set up routing for the book API

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
