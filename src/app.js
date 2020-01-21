require('dotenv').config('../');
const express = require('express');
const morgan = require('morgan');
const db = require('./config/database');


const app = express();
/**
 * Parse requests to JSON
 */
app.use(express.json());

/**
 * Enable http logger
 */
app.use(morgan('tiny'));

/**
 * Database connection
 */
db(process.env.DB_URL)
  .then(() => console.log('Connected'))
  .catch((e) => {
    console.error(e);
    /**
     * Exit the app if no DB connection
     */
    process.exit(0);
  });

/**
 * Import all routes and under the prefix /api
 * Example: http://localhost:3000/api/posts
 */
app.use('/api', require('./routes'));


/**
 * Export the app instance to use it for testing
 */
module.exports = app;

/**
 * Run server
 */
const port = process.env.APP_PORT || 3000;
app.listen(port, () => console.log(`App running on port ${port}`));
