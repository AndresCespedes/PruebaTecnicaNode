import { getRepository } from "typeorm";
import { Product } from "../entities/Product.entities";
export const createProduct = async (req, res) => {
    const productData = req.body;
    if (!productData.productName || !productData.category || productData.price <= 0) {
        return res
            .status(400)
            .json({ error: "Los datos de creación del producto no son correctos" });
    }
    try {
        const productRespository = getRepository(Product);
        const newProduct = new Product();
        newProduct.productName = productData.productName;
        newProduct.category = productData.category;
        newProduct.price = productData.price;
        newProduct.quantity = productData.quantity;
        await productRespository.save(newProduct);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error en el servidor" });
    }
};
