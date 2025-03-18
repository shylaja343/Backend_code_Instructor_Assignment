// I created this because to test the api i don't have (register and login) credentioals 


const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateToken = (userId, role) => {
    const token = jwt.sign(
        { id: userId, role },
        process.env.JWT_SECRET,
        { expiresIn: '2h' }
    );
    console.log(`Generated Token for ${role}:`, token);
};

const adminId = '65e8f49b23c4a201f1e54311';
const instructorId = '65e8f49b23c4a201f1e54322';

generateToken(adminId, 'admin');
generateToken(instructorId, 'instructor');
