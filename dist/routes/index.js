"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_routes_1 = __importDefault(require("./user.routes"));
const generating_routes_1 = __importDefault(require("./generating.routes"));
const oauth_routes_1 = __importDefault(require("./oauth.routes"));
const support_routes_1 = __importDefault(require("./support.routes"));
const router = (0, express_1.Router)();
router.use('/users', user_routes_1.default);
router.use('/generate', generating_routes_1.default);
router.use('/oauth', oauth_routes_1.default);
router.use('/support', support_routes_1.default);
exports.default = router;
