const express = require("express");
const router = express.Router();
const { getUser, updateUser } = require("../controller/user.controller");
const { checkAuthorization, encryptPassword } = require("../middleware");

// router.get("/:id", getUser);
router.get("/:id", checkAuthorization, getUser);
router.put("/update/:id", checkAuthorization, encryptPassword, updateUser);

module.exports = router;
