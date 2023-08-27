import { OpenAPIV3 } from "openapi-types";

export const userRoutes: OpenAPIV3.PathsObject = {
  "/api/users": {
    post: {
      tags: ["Usuarios"],

      summary: "Crear un nuevo usuario",
      description:
        "Crea un nuevo usuario con la información proporcionada en el cuerpo de la solicitud.",
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                userName: {
                  type: "string",
                  description: "Nombre de usuario",
                },
                money: {
                  type: "number",
                  description: "Cantidad de dinero",
                },
              },
              required: ["userName", "money"],
            },
          },
        },
      },
      responses: {
        "200": {
          description: "Usuario creado exitosamente",
        },
      },
    },
  },
  "/api/users/{userId}": {
    get: {
      tags: ["Usuarios"],
      summary: "Obtener un usuario por ID",
      description:
        "Obtiene la información detallada de un usuario según su ID.",
      parameters: [
        {
          name: "userId",
          in: "path",
          description: "ID del usuario a obtener",
          required: true,
          schema: {
            type: "integer",
            format: "int64",
          },
        },
      ],
      responses: {
        "200": {
          description: "Usuario obtenido exitosamente",
        },
      },
    },
    put: {
      tags: ["Usuarios"],
      summary: "Actualizar un usuario con sus compras",
      description:
        "Actualiza la información de un usuario junto con sus compras.",
      parameters: [
        {
          name: "userId",
          in: "path",
          description: "ID del usuario a actualizar",
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
                userName: {
                  type: "string",
                  description: "Nombre de usuario",
                },
                money: {
                  type: "number",
                  description: "Cantidad de dinero",
                },
              },
            },
          },
        },
      },
      responses: {
        "200": {
          description: "Usuario actualizado exitosamente",
        },
      },
    },
    delete: {
      tags: ["Usuarios"],
      summary: "Eliminar un usuario con sus compras",
      description: "Elimina un usuario y todas sus compras asociadas.",
      parameters: [
        {
          name: "userId",
          in: "path",
          description: "ID del usuario a eliminar",
          required: true,
          schema: {
            type: "integer",
            format: "int64",
          },
        },
      ],
      responses: {
        "204": {
          description: "Usuario eliminado exitosamente",
        },
      },
    },
  },
};
