const User = require("../models/user.js");

exports.login = async (req, res) => {
    try {
        const { email, password, authType, IP } = req.body;
        let user;
        user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "User doesn't exists!" });

        const check = password === user.password;
        if (!check) return res.status(400).json({ message: "Password doesn't match!" });

        res.status(200).send({
            email: user.email,
            password: user.password,
            url: user.url,
        });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};