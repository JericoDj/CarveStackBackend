"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post('/contact', (req, res) => {
    try {
        // TODO: Handle incoming support requests
        res.status(200).json({
            success: true,
            message: "Support request received"
        });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});
exports.default = router;
