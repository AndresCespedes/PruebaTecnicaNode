import { OpenAPIV3 } from "openapi-types";

export const productRoutes: OpenAPIV3.PathsObject = {
  "/api/products": {
    post: {
      tags: ["Productos"],
      summary: "Crear un nuevo producto",
      description:
        "Crea un nuevo producto con la información proporcionada en el cuerpo de la solicitud.",
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                productName: {
                  type: "string",
                  description: "Nombre del producto",
                },
                category: {
                  type: "string",
                  description: "Categoría del producto",
                },
                price: {
                  type: "number",
                  description: "Precio del producto",
                },
                quantity: {
                  type: "integer",
                  description: "Cantidad disponible del producto",
                },
                // Agrega más propiedades aquí si es necesario
              },
              required: ["productName", "category", "price", "quantity"], // Propiedades obligatorias
            },
          },
        },
      },
      responses: {
        "201": {
          description: "Producto creado exitosamente",
        },
      },
    },
  },
  "/api/products/all-products": {
    get: {
      tags: ["Productos"],
      summary: "Obtener todos los productos",
      description: "Obtiene una lista de todos los productos disponibles.",
      responses: {
        "200": {
          description: "Productos obtenidos exitosamente",
        },
      },
    },
  },
  "/api/products/{productId}": {
    put: {
      tags: ["Productos"],
      summary: "Actualizar un producto",
      description: "Actualiza la información de un producto existente.",
      parameters: [
        {
          name: "productId",
          in: "path",
          description: "ID del producto a actualizar",
          required: true,
          schema: {
            type: "integer",
            format: "int64",
          },
        },
      ],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              properties: {
                productName: {
                  type: "string",
                  description: "Nombre del producto",
                },
                category: {
                  type: "string",
                  description: "Categoría del producto",
                },
                price: {
                  type: "number",
                  description: "Precio del producto",
                },
                quantity: {
                  type: "number",
                  description: "Cantidad del producto",
                },
              },
            },
          },
        },
      },
      responses: {
        "200": {
          description: "Producto actualizado exitosamente",
        },
        // Puedes agregar más respuestas aquí según tus necesidades
      },
    },
    delete: {
      tags: ["Productos"],
      summary: "Eliminar un producto",
      description: "Elimina un producto existente.",
      parameters: [
        {
          name: "productId",
          in: "path",
          description: "ID del producto a eliminar",
          required: true,
          schema: {
            type: "integer",
            format: "int64",
          },
        },
      ],
      responses: {
        "204": {
          description: "Producto eliminado exitosamente",
        },
        // Puedes agregar más respuestas aquí según tus necesidades
      },
    },
  },
  // Puedes agregar más definiciones de rutas aquí
};
