import { Router, Request, Response } from 'express';
import { requireAuth, getAuth } from '@clerk/express';

const router = Router();

router.post('/start', requireAuth(), (req: Request, res: Response) => {
    try {
        const { userId } = getAuth(req);
        
        // TODO: Trigger generation process
        
        res.status(200).json({
            success: true,
            message: "Generation process started",
            data: { userId }
        });
    } catch (error: any) {
        res.status(500).json({ success: false, message: error.message });
    }
});

export default router;
