import { Pool } from "pg";
import config from ".";

export const pool = new Pool({
    connectionString: config.psql_string,
    ssl: { rejectUnauthorized: false },
});

const initDB = async() => {

};

export default initDB;