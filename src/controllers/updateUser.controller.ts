// user.controller.ts

import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entities/User.entities";

export const updateUserWithPurchases = async (req: Request, res: Response) => {
  const userId = req.params.userId; // ID del usuario que deseas actualizar
  const { userName, money } = req.body;

  try {
    const userRepository = getRepository(User);

    const userToUpdate = await userRepository
      .createQueryBuilder("user")
      .leftJoinAndSelect("user.purchases", "purchase")
      .where("user.id = :id", { id: userId })
      .getOne();

    if (!userToUpdate) {
      return res.status(404).json({
        message:
          "El usuario no pudo ser actualizado porque el usuario no existe en el sistema",
      });
    }

    userToUpdate.userName = userName;
    userToUpdate.money = money;

    await userRepository.save(userToUpdate);

    res.status(200).json({
      message: "Usuario actulizado correctamente",
      user: userToUpdate,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en el servidor" });
  }
};
