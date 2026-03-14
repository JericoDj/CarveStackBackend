"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_2 = require("@clerk/express");
const router = (0, express_1.Router)();
router.post('/start', (0, express_2.requireAuth)(), (req, res) => {
    try {
        const { userId } = (0, express_2.getAuth)(req);
        // TODO: Trigger generation process
        res.status(200).json({
            success: true,
            message: "Generation process started",
            data: { userId }
        });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});
exports.default = router;
