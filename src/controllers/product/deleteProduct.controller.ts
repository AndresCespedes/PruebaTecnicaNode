import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Product } from "../../entities/Product.entities";

export const deleteProduct = async (req: Request, res: Response) => {
  const productId = req.params.productId;

  try {
    const productRepository = getRepository(Product);

    const deleteResult = await productRepository
      .createQueryBuilder()
      .delete()
      .from(Product)
      .where("id = :id", { id: productId })
      .execute();

    if (deleteResult.affected === 0) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    res.status(200).json({ message: "Producto eliminado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error en el servidor" });
  }
};
