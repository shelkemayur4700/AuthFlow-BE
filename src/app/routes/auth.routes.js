const express = require("express");
const router = express.Router();
const { signUp, signIn } = require("../controller/auth.controller");
const { encryptPassword } = require("../middleware");

router.post("/signup", encryptPassword, signUp);
router.post("/signin", signIn);

module.exports = router;
