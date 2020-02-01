const express = require('express');
const connectDB = require('./config/db');

const app = express();

// connect to db
connectDB();

// init middleware
app.use(express.json({ extended: false }));

// define app routes
app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`App is up on port ${PORT}`);
});