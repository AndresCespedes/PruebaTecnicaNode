import express from "express";
// Imports de usuarios
import { createUser } from "../controllers/user/user.controller";
import { getUserWithPurchases } from "../controllers/user/getUser.controller";
import { updateUserWithPurchases } from "../controllers/user/updateUser.controller";
import { deleteUserWithPurchases } from "../controllers/user/deleteUser.controller";
//Imports de productos
import { createProduct } from "../controllers/product/product.controller";
import { getAllProducts } from "../controllers/product/getProduct.controller";
import { updateProduct } from "../controllers/product/updateProduct.controller";
import { deleteProduct } from "../controllers/product/deleteProduct.controller";

//Imports de productos comprados
import { createProductPurchase } from "../controllers/product/productPurchase.controller";

const router = express.Router();

// Rutas de Usuarios
router.post("/users", createUser);
router.get("/users/:userId", getUserWithPurchases);
router.put("/users/:userId", updateUserWithPurchases);
router.delete("/users/:userId", deleteUserWithPurchases);

// Rutas de Productos
router.post("/products", createProduct);
router.get("/products/all-products", getAllProducts);
router.put("/products/:productId", updateProduct);
router.delete("/products/:productId", deleteProduct);

// Rutas de Compras de Productos
router.post("/product-purchases", createProductPurchase);

export default router;
