const mongoose = require('mongoose');

const academiesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Academy name is required"]
    },
    address: {
        type: String,
        required: [true, "Address is required"]
    },
    courses: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Course"
    }]
});

module.exports = mongoose.model("Academy", academiesSchema, "academies");