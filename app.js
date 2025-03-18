require('dotenv').config();
const express = require('express');
const connectDB = require('./connectDB');
const adminRoutes = require('./routes/adminRoutes');
const instructorRoutes = require('./routes/instructorRoutes');

const app = express();
app.use(express.json());

connectDB();

app.use('/admin', adminRoutes);
app.use('/instructor', instructorRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
