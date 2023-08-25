import { Request, Response } from "express";
import { CreateUserDto } from "../dtos/create-user.dto";
import { getRepository } from "typeorm"; // Importa getRepository desde TypeORM
import { User } from "../entities/User.entities";

export const createUser = async (req: Request, res: Response) => {
  const userData: CreateUserDto = req.body;

  try {
    const userRepository = getRepository(User);

    const newUser = new User();
    newUser.userName = userData.userName;
    newUser.money = userData.money;

    await userRepository.save(newUser);

    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
