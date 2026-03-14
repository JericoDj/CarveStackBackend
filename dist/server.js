"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const config_1 = require("./config");
const startServer = () => {
    try {
        app_1.default.listen(config_1.config.port, () => {
            console.log(`Server is running on port ${config_1.config.port} in ${config_1.config.nodeEnv} mode`);
        });
    }
    catch (error) {
        console.error('Error starting server:', error);
        process.exit(1);
    }
};
startServer();
