"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const pg_1 = require("pg");
const index_1 = require("./index");
let pool;
if (index_1.config.databaseUrl) {
    pool = new pg_1.Pool({
        connectionString: index_1.config.databaseUrl,
        ssl: index_1.config.nodeEnv === 'production' ? { rejectUnauthorized: false } : undefined
    });
}
else {
    console.warn("Neon Database URL not found in environment variables.");
    // Initialize dummy pool to avoid crash if not configured immediately
    pool = new pg_1.Pool();
}
exports.db = pool;
