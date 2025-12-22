import express, { Request, Response } from "express";
import cors from "cors";
import initDB from "./config/db";
import { authRoutes } from "./modules/auth/auth.routes";
import { productRoutes } from "./modules/product/product.routes";

const app = express();

//? middleware
app.use(cors());
app.use(express.json()); // for json data
app.use(express.urlencoded({ extended: true })); // for form data

app.get('/', (req: Request, res: Response) => {
	res.send("Hello World....!")
});

//* Initialize DB
initDB();

//* Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/products", productRoutes)

app.use((req: Request, res: Response) => {
    res.status(404).json({
        path: req.url,
        success: false,
        message: "Not Found!",
    });
});

export default app;