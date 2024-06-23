const userDao = require('../dao/userDao');

const createUser = async (userData) => {
  return await userDao.createUser(userData);
};

const getUserById = async (id) => {
  return await userDao.getUserById(id);
};

const getAllUsers = async () => {
  return await userDao.getAllUsers();
};

const updateUser = async (id, updateData) => {
  return await userDao.updateUser(id, updateData);
};

const deleteUser = async (id) => {
  return await userDao.deleteUser(id);
};

module.exports = {
  createUser,
  getUserById,
  getAllUsers,
  updateUser,
  deleteUser,
};