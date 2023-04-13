const express = require("express");
const router = express.Router();
const { login, signup } = require("../controllers/user");
const { upload } = require("../multer");


router.post("/login", login);
router.post("/signup", upload.single("file"), signup);

module.exports = router;