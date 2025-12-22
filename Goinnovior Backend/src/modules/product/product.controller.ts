import { Request, Response } from "express";
import { productService } from "./product.services";

const getAllProducts = async(req: Request, res: Response) => {
	try {
		const result = await productService.getAllProducts();
		console.log(result);
	} catch (error: any) {
		res.status(500).json({
			success: false,
			message: error.message,
			errors: error,
		})
	}
};

export const productController = {
	getAllProducts,
};