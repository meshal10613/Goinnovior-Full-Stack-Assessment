import { Pool } from "pg";
import config from ".";

export const pool = new Pool({
    connectionString: config.psql_string,
    ssl: { rejectUnauthorized: false },
});

const initDB = async () => {
    await pool.query(`
		CREATE TABLE IF NOT EXISTS users (
			id SERIAL PRIMARY KEY,
			name VARCHAR(255),
			email VARCHAR(255) NOT NULL UNIQUE,
			password TEXT NOT NULL CHECK (length(password) >= 6)
		)
	`);
};

export default initDB;