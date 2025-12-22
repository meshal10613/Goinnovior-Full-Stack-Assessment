import bcrypt from "bcryptjs";
import { pool } from "../../config/db";

const createUser = async (payload: Record<string, unknown>) => {
    const { email, password } = payload;
    const hashPassword = bcrypt.hashSync(password as string, 10);
    const result = await pool.query(
        `INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *`,
        [email, hashPassword]
    );
    delete result.rows[0].password;
    return result;
};

const loginUser = async (payload: Record<string, unknown>) => {
    const { email, password } = payload;
    const isExist = await pool.query(`SELECT * FROM users WHERE email = $1`, [
        email,
    ]);
    if (isExist.rows.length === 0) {
        return null;
    }

    const user = isExist.rows[0];
    const isPasswordMatch = await bcrypt.compare(
        password as string,
        user.password
    );
    if (!isPasswordMatch) {
        return "password";
    }

    delete user.password;
    return user;
};

export const authService = {
    createUser,
    loginUser,
};
