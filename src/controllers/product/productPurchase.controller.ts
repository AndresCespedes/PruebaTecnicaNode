import { Request, Response } from "express";
import { CreateProductPurchaseDto } from "../../dtos/user/create-product-purchase.dto";
import { getRepository } from "typeorm"; // Importa getRepository desde TypeORM
import { ProductPurchase } from "../../entities/ProductPurchase.entity";
import { Product } from "../../entities/Product.entities";

export const createProductPurchase = async (req: Request, res: Response) => {
  const purchaseData: CreateProductPurchaseDto = req.body;

  try {
    const productPurchaseRepository = getRepository(ProductPurchase);

    const newPurchase = new ProductPurchase();
    newPurchase.id = purchaseData.productIds;
    newPurchase.total = purchaseData.total;

    // Busca los productos por sus IDs y asígnalos a la compra
    const products = await getRepository(Product).findByIds([
      purchaseData.productIds,
    ]);

    newPurchase.products = products;

    await productPurchaseRepository.save(newPurchase);

    res.status(201).json({
      message: "Compra de producto creada exitosamente",
      purchase: newPurchase,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error del servidor" });
  }
};
