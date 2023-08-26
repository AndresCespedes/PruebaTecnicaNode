import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Product } from "../../entities/Product.entities";
import { UpdateProductDto } from "../../dtos/product/update-product.dto";

export const updateProduct = async (req: Request, res: Response) => {
  const productId = req.params.productId;
  const updatedProductData: UpdateProductDto = req.body;

  try {
    const productRepository = getRepository(Product);

    const updateResult = await productRepository
      .createQueryBuilder()
      .update(Product)
      .set(updatedProductData)
      .where("id = :id", { id: productId })
      .execute();

    if (updateResult.affected === 0) {
      return res.status(404).json({ error: "No se ha encontrado el producto" });
    }

    res.status(200).json({ message: "Producto actualizado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en el servidor" });
  }
};
