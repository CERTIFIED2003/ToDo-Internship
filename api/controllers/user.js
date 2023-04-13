const User = require("../models/user.js");
const fs = require("fs");
const path = require("path");

exports.signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const userEmail = await User.findOne({ email });
        if (userEmail) {
            const filename = req.file.filename;
            const filePath = `uploads/${filename}`;
            fs.unlink(filePath, (err) => {
                if (err) {
                    console.log(err);
                    res.status(500).json({ message: "Error deleting file" });
                }
            });
            return res.status(400).send({ "message": "User already exists!" });
        }
        const filename = req.file.filename;
        const fileUrl = path.join(filename);

        let user = await User.findOne({ email });
        if (user) return res.status(400).send({ "message": "User already exists!" });

        user = await User.create({
            name,
            email,
            avatar: fileUrl,
            password,
        });
        res.status(200).json({ user });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email }).select("+password");
        if (!user) return res.status(400).json({ message: "User doesn't exists!" });

        const isPasswordValid = await user.password === password;
        if (!isPasswordValid) return res.status(401).json({ "message": "Try again with correct credentials!" });


        res.status(200).send({
            id: user._id,
            email: user.email,
            name: user.name,
            password: user.password,
            avatar: user.avatar,
        });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};