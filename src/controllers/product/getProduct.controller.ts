import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Product } from "../../entities/Product.entities";

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const productRepository = getRepository(Product);
    const products = await productRepository.find();

    res
      .status(200)
      .json({ message: "Consulta de los productos exitosa", products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error del servidor" });
  }
};
