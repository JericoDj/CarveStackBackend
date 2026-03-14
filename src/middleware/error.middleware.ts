import { Request, Response, NextFunction } from 'express';
import { config } from '../config';

export const errorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    console.error(`[Error] ${statusCode} - ${message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);

    res.status(statusCode).json({
        success: false,
        message,
        ...(config.nodeEnv === 'development' && { stack: err.stack }),
    });
};
