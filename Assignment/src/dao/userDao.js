const User = require('../models/userModel');

const createUser = async (userData) => {
  const user = new User(userData);
  return await user.save();
};

const getUserById = async (id) => {
  return await User.findById(id).where({ deleted: false });
};

const getAllUsers = async () => {
  return await User.find({ deleted: false });
};

const updateUser = async (id, updateData) => {
  return await User.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteUser = async (id) => {
  return await User.findByIdAndUpdate(id, { deleted: true }, { new: true });
};

module.exports = {
  createUser,
  getUserById,
  getAllUsers,
  updateUser,
  deleteUser,
};