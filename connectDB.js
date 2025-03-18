const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);  // No options needed for modern MongoDB driver
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('Database connection failed:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
