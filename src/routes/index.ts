import express from "express";
import { createUser } from "../controllers/user.controller";
import { createProduct } from "../controllers/product.controller";
import { createProductPurchase } from "../controllers/productPurchase.controller";
import { getUserWithPurchases } from "../controllers/getUser.controller";
import { updateUserWithPurchases } from "../controllers/updateUser.controller";

const router = express.Router();

// Rutas de Usuarios
router.post("/users", createUser);
router.get("/users/:userId", getUserWithPurchases);
router.put("/users/:userId", updateUserWithPurchases);

// Rutas de Productos
router.post("/products", createProduct);

// Rutas de Compras de Productos
router.post("/product-purchases", createProductPurchase);

export default router;
