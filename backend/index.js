const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = require('./src/config/database');
const app = express();
connectDB();
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});