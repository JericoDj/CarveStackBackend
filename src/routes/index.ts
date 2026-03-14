import { Router } from 'express';
import userRoutes from './user.routes';
import generatingRoutes from './generating.routes';
import oauthRoutes from './oauth.routes';
import supportRoutes from './support.routes';

const router = Router();

router.use('/users', userRoutes);
router.use('/generate', generatingRoutes);
router.use('/oauth', oauthRoutes);
router.use('/support', supportRoutes);

export default router;
