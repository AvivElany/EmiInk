// Require
require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const connectDB = require('./config/db');



// Initialize express
const app = express();

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('static'));

// Routes
app.use('/contact', require('./routes/contactRoutes'));
app.use('/auth', require('./routes/authRoutes'));

// Port
const { PORT } = process.env; //import port from env file

// Connect to database
connectDB().then(()=>{ //callback hell -- we always prefer to use async-await
  // Run server
    app.listen(PORT, ()=> console.log(`Server is listening for requests on http://127.0.0.1:${PORT}`))
});