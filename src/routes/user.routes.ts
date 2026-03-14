import { Router } from 'express';
import { requireAuth } from '@clerk/express';
import { UserController } from '../controllers/user.controller';

const router = Router();
const userController = new UserController();

// Apply requireAuth middleware to protect all user routes
router.use(requireAuth());

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

export default router;
