const { Router } = require('express');
const router = Router();

const loginController = require('../controller/Login');

router.post('/signup', loginController.createUsers);
router.post('/login', loginController.findUser);
router.get('/users', loginController.findAllUsers);
router.put('/users/:id', loginController.updateUser);
router.delete('/users/:id', loginController.deleteUser);


module.exports = router;