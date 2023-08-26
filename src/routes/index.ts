import express from "express";
import { createUser } from "../controllers/user.controller";
import { createProduct } from "../controllers/product.controller";
import { createProductPurchase } from "../controllers/productPurchase.controller";
import { getUserWithPurchases } from "../controllers/getUser.controller";

const router = express.Router();

// Rutas de Usuarios
router.post("/users", createUser);
router.get("/users/:userId", getUserWithPurchases);

// Rutas de Productos
router.post("/products", createProduct);

// Rutas de Compras de Productos
router.post("/product-purchases", createProductPurchase);

export default router;
