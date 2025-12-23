import { pool } from "../../config/db";

const getAllProducts = async() => {
	const result = await pool.query(`SELECT * FROM products`);
	return result.rows;
};

export const productService = {
	getAllProducts,
};