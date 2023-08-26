// user.controller.ts

import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../../entities/User.entities";
import { ProductPurchase } from "../../entities/ProductPurchase.entity";

export const deleteUserWithPurchases = async (req: Request, res: Response) => {
  const userId = req.params.userId; // ID del usuario que deseas eliminar

  try {
    const userRepository = getRepository(User);
    const userToDelete = await userRepository
      .createQueryBuilder("user")
      .leftJoinAndSelect("user.purchases", "purchase")
      .where("user.id = :id", { id: userId })
      .getOne();

    if (!userToDelete) {
      return res.status(404).json({
        error:
          "El usuario no pudo ser eliminado porque no existe en el sistema",
      });
    }

    const productPurchaseRepository = getRepository(ProductPurchase);
    const purchasesToDelete = userToDelete.purchases;

    if (purchasesToDelete.length > 0) {
      await productPurchaseRepository.remove(purchasesToDelete);
    }

    await userRepository.remove(userToDelete);

    res.status(200).json({
      message:
        "El usuario y sus compras asociadas han sido eliminados correctamnete",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error del servidor" });
  }
};
