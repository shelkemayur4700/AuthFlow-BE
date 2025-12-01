const User = require("../models/user");
const mongoose = require("mongoose");

const getUserById = async (id) => {
  try {
    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("Invalid user ID");
    }

    const user = await User.findById(id).select("-password");
    if (!user) throw new Error("User not found");

    return user;
  } catch (error) {
    throw new Error(error.message || "Error fetching user");
  }
};

// ===================== UPDATE USER — ALLOW ALL FIELDS =====================
const updateUserById = async (id, data) => {
  try {
    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("Invalid user ID");
    }

    // Email lowercase if provided
    // if (data.email) data.email = data.email.toLowerCase();

    // Now data.password is already hashed by middleware (if provided)

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: data }, // apply all fields
      {
        new: true,
        runValidators: true,
      }
    ).select("-password");

    if (!updatedUser) {
      throw new Error("User not found");
    }

    return updatedUser;
  } catch (error) {
    throw new Error(error.message || "Error updating user");
  }
};

module.exports = {
  getUserById,
  updateUserById,
};
