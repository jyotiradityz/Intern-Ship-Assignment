const userService = require('../services/userService');
const { validateUser, validateUserId } = require('../validators/userValidator');
const { generateToken } = require('../middleware/authMiddleware');

const createUser = async (req, res) => {
  try {
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user = await userService.createUser(req.body);
    const token = generateToken({ userId: user._id });
    res.header('Authorization', token).status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getUserById = async (req, res) => {
  try {
    const { error } = validateUserId(req.params);
    if (error) return res.status(400).send(error.details[0].message);

    const user = await userService.getUserById(req.params.userId);
    if (!user) return res.status(404).send('User not found');
    
    res.json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const { error } = validateUser(req.body);
    if (error) {
      console.log(error);
      return res.status(400).send(error.details[0].message);
    }
    const user = await userService.updateUser(req.params.userId, req.body);
    if (!user) return res.status(404).send('User not found');

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { error } = validateUserId(req.params);
    if (error) return res.status(400).send(error.details[0].message);

    const user = await userService.deleteUser(req.params.userId);
    if (!user) return res.status(404).send('User not found');

    res.json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  createUser,
  getUserById,
  getAllUsers,
  updateUser,
  deleteUser,
};