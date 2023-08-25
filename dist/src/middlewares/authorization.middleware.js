// authorization.middleware.ts
import { verifyToken } from "../utils/jwt.utils"; // Importa la función de verificación de token
export const authorize = () => {
    return (req, res, next) => {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).json({ error: "No cuentas con la autorización" });
        }
        try {
            const decodedToken = verifyToken(token); // se decodifica el token utilizando la función de verificación
            req = decodedToken;
            next();
        }
        catch (error) {
            console.error(error);
            res.status(401).json({ error: "No cuentas con la autorización" });
        }
    };
};
