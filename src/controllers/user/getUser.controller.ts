import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../../entities/User.entities";

export const getUserWithPurchases = async (req: Request, res: Response) => {
  const userId = req.params.userId; // ID del usuario que deseas obtener

  try {
    const userRepository = getRepository(User);
    const user = await userRepository
      .createQueryBuilder("user")
      .leftJoinAndSelect("user.purchases", "purchase")
      .where("user.id = :id", { id: userId })
      .getOne();

    if (!user) {
      return res.status(404).json({ error: "El usuario no fue encontrado" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error del servidor" });
  }
};
