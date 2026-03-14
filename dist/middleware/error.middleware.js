"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
const config_1 = require("../config");
const errorMiddleware = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    console.error(`[Error] ${statusCode} - ${message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
    res.status(statusCode).json({
        success: false,
        message,
        ...(config_1.config.nodeEnv === 'development' && { stack: err.stack }),
    });
};
exports.errorMiddleware = errorMiddleware;
