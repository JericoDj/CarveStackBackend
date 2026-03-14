import { Pool } from 'pg';
import { config } from './index';

let pool: Pool;

if (config.databaseUrl) {
    pool = new Pool({
        connectionString: config.databaseUrl,
        ssl: config.nodeEnv === 'production' ? { rejectUnauthorized: false } : undefined
    });
} else {
    console.warn("Neon Database URL not found in environment variables.");
    // Initialize dummy pool to avoid crash if not configured immediately
    pool = new Pool(); 
}

export const db = pool;
