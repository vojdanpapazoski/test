const mongoose = require('mongoose');

const coursesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name of the course is required"]
    },

    address: {
        type: String,
        required: [true, "Adress of the course is required"]
    },
    subject: {
        type: String,
        required: [true, "Field of the course is required"]
    },
    academy: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Academy"
    },
    author: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    }
});

module.exports = mongoose.model("Course", coursesSchema, "courses");