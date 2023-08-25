import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { User } from "../entities/User.entities";

dotenv.config();

const secretKey = process.env.SECRET_KEY as string;

export const generateToken = (user: User): string => {
  const payload = {
    id: user.id,
  };

  return jwt.sign(payload, secretKey, { expiresIn: "1h" }); // Firma el token con una expiración de 1 hora
};

export const verifyToken = (token: string): any => {
  try {
    const decodedToken = jwt.verify(token, secretKey);
    return decodedToken;
  } catch (error) {
    throw new Error("El token es invalidado");
  }
};
