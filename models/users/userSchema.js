const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        validate: [
            validator.isEmail, "Please provide a valid email"
        ]
    },
    password: {
        type: String,
        minLength: [8, "Password must be at least 8 characters"],
        validate: [
            validator.isStrongPassword, "Please provide a strong password"
        ]
    }
});

module.exports = mongoose.model('User', userSchema, 'users');