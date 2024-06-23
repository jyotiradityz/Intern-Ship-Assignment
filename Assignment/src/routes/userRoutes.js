const express = require('express');
const userController = require('../controllers/userController');
const {authenticate} = require('../middleware/authMiddleware');

const router = express.Router();
 
router.get('/', authenticate, userController.getAllUsers);
router.get('/:userId', authenticate, userController.getUserById);
router.post('/', userController.createUser);
router.put('/:userId', authenticate, userController.updateUser);
router.patch('/:userId', authenticate, userController.updateUser);
router.delete('/:userId', authenticate, userController.deleteUser);

module.exports = router;