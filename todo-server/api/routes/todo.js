import express from 'express';
import  * as todoController from '../controllers/todo.js';

const router = express.Router();

// Fetch todos
router.route('/todos')
.get(todoController.index);

router.route('/todos')
//.get(todoController.index)
.post(todoController.save);

// Parameterized route for updating, deleting and fetching Todo by ID
router.route('/todos/:id')
.get(todoController.get)
.put(todoController.update)
.delete(todoController.remove);

export default router;