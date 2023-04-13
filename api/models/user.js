const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email address is required"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    url: {
        type: String
    },
});

module.exports = mongoose.model('User', UserSchema)