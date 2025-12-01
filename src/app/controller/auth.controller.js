const {
  checkUserExists,
  createUser,
  validateUser,
} = require("../service/auth.service");

const signUp = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    console.log("Signup Request Body:", req.body);
    debugger;
    if (!email || !password || !name) {
      return res
        .status(400)
        .json({ status: "Failed", message: "Please enter details." });
    }

    const userExist = await checkUserExists(email);
    if (userExist) {
      return res
        .status(409)
        .json({ status: "Failed", message: "User already exists." });
    }

    const user = await createUser({ name, email, password });
    res.status(201).json({ status: "Success", message: "User Created", user });
  } catch (error) {
    next(error);
  }
};

const signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        status: "Failed",
        message: "Please enter email and password.",
      });
    }

    const result = await validateUser(email, password);
    if (!result) {
      return res
        .status(401)
        .json({ status: "Failed", message: "Invalid email or password." });
    }

    res.status(200).json({
      status: "Success",
      message: "User logged in.",
      token: result.token,
      user: result.user,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  signUp,
  signIn,
};
