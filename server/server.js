const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;
const { handleErrors } = require('./middleware/errors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', require('./routes/goals'));

app.use(handleErrors);

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}.`);
});