const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/* ----------------------  ERROR MIDDLEWARE TO RETURN ERROR---------------------- */
const errorMiddleware = (err, req, res, next) => {
  //we will send error from here

  res.status(500).json({
    message: "error",
    error: err.toString(),
  });
};

/* ---------------------- MIDDLEWARE TO ENCRYPT PASSWORD---------------------- */
const encryptPassword = (req, res, next) => {
  const saltRounds = 10;
  bcrypt.hash(req?.body?.password, saltRounds, function (err, hash) {
    req.body.password = hash;
    next();
  });
};

/* ---------------- MIDDLEWARE TO CHECK TOKEN OF SIGNED IN USER --------------- */
const checkAuthorization = (req, res, next) => {
  //WE WILL BE CHECKING JWT HEADER
  const authorizationToken = req?.headers?.authorization;
  if (authorizationToken) {
    // We will check the token here ,that if it is the valid token ornot
    try {
      jwt.verify(authorizationToken, process.env.JWT_SECRET);
      next();
    } catch (err) {
      res.status(401).json({
        status: "Failed",
        message: "Token Malformed/Expired...",
      });
    }
  } else {
    res.status(401).json({
      status: "Failed",
      message: "Authorization Required",
    });
  }
};

module.exports = {
  errorMiddleware,
  encryptPassword,
  checkAuthorization,
};
