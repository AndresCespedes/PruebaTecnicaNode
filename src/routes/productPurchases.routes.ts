import { OpenAPIV3 } from "openapi-types";

export const productPurchaseRoutes: OpenAPIV3.PathsObject = {
  "/api/product-purchases": {
    post: {
      tags: ["Productos comprados"],
      summary: "Crear una nueva compra de productos",
      description:
        "Crea una nueva compra de productos con la información proporcionada en el cuerpo de la solicitud.",
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                total: {
                  type: "number",
                  description: "Total de la compra",
                },
              },
              required: ["productIds", "total"],
            },
          },
        },
      },
      responses: {
        "201": {
          description: "Compra de productos creada exitosamente",
        },
      },
    },
  },
};
