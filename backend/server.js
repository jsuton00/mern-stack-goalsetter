const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/db');
const { handleErrors } = require('./middleware/errors');

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', require('./routes/goals'));

app.use(handleErrors);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}.`);
});
