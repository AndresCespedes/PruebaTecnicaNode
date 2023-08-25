import { getRepository } from "typeorm"; // Importa getRepository desde TypeORM
import { ProductPurchase } from "../entities/ProductPurchase.entity";
export const createProductPurchase = async (req, res) => {
    const purchaseData = req.body;
    try {
        const productPurchaseRepository = getRepository(ProductPurchase);
        const newPurchase = new ProductPurchase();
        newPurchase.id = purchaseData.productIds;
        newPurchase.total = purchaseData.total;
        await productPurchaseRepository.save(newPurchase);
        res.status(201).json({
            message: "Product purchase created successfully",
            purchase: newPurchase,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
