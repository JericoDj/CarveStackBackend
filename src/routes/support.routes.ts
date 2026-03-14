import { Router, Request, Response } from 'express';

const router = Router();

router.post('/contact', (req: Request, res: Response) => {
    try {
        // TODO: Handle incoming support requests
        res.status(200).json({
            success: true,
            message: "Support request received"
        });
    } catch (error: any) {
        res.status(500).json({ success: false, message: error.message });
    }
});

export default router;
