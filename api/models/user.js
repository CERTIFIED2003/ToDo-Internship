const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema;

const UserSchema = mongoose.Schema({
    id: ObjectId,
    email: {
        type: String,
        required: [true, "Please enter your email address"],
    },
    name: {
        type: String,
        required: [true, "Please enter your name!"],
    },
    password: {
        type: String,
        required: [true, "Please enter your password"],
        select: false,
    },
    avatar: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model('User', UserSchema)