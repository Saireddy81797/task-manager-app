const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const tasksController = require('../controllers/tasks');


router.get('/', auth, tasksController.getTasks);
router.post('/', auth, tasksController.createTask);
router.put('/:id', auth, tasksController.updateTask);
router.delete('/:id', auth, tasksController.deleteTask);


module.exports = router;
