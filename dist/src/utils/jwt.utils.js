import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const secretKey = process.env.SECRET_KEY;
export const generateToken = (user) => {
    const payload = {
        id: user.id,
    };
    return jwt.sign(payload, secretKey, { expiresIn: "1h" }); // Firma el token con una expiración de 1 hora
};
export const verifyToken = (token) => {
    try {
        const decodedToken = jwt.verify(token, secretKey);
        return decodedToken;
    }
    catch (error) {
        throw new Error("El token es invalidado");
    }
};
