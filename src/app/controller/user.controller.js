const { getUserById, updateUserById } = require("../service/user.service");

const getUser = async (req, res, next) => {
  try {
    const user = await getUserById(req.params.id);

    res.status(200).json({
      status: "Success",
      message: "User fetched successfully.",
      user,
    });
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await updateUserById(req.params.id, req.body);

    res.status(200).json({
      status: "Success",
      message: "User updated successfully.",
      user: updatedUser,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUser,
  updateUser,
};
