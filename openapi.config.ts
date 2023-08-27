import { OpenAPIV3 } from "openapi-types";

// Importa las definiciones de rutas de los diferentes controladores
import { userRoutes } from "./src/routes/user.routes";
import { productRoutes } from "./src/routes/product.routes";
import { productPurchaseRoutes } from "./src/routes/productPurchases.routes";

export const openApiConfig: OpenAPIV3.Document = {
  openapi: "3.0.0",
  info: {
    title: "API de Node - Usuarios, Productos, Compras de Productos",
    version: "1.0.0",
  },
  tags: [
    {
      name: "Usuarios",
      description: "Operaciones relacionadas con usuarios del sistema",
    },
    {
      name: "Productos",
      description: "Operaciones relacionadas con los productos del sistema",
    },
    {
      name: "Productos comprados",
      description:
        "Operaciones relacionadas con las compras de productos en el sistema",
    },
  ],
  paths: {
    ...userRoutes,
    ...productRoutes,
    ...productPurchaseRoutes,
  },
};
