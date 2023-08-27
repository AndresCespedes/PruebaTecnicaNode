# Prueba técnica NodeJS

Esta es una prueba técnica que implementa una API REST utilizando Node.js, Express, TypeScript y PostgreSQL con TypeORM. El proyecto también está dockerizado utilizando Docker Compose.

## Requisitos

- Node.js (v16.13.1 recomendado)
- Docker
- Docker Compose

## Instrucciones de Uso

## Clona el Repositorio:

   ```bash
   https://github.com/AndresCespedes/PruebaTecnicaNode.git

   ```

## Navegacion al directorio del proyecto

   cd mi-proyecto

## Crea un archivo .env

   Crea un archivo .env en la raíz del proyecto y configura las variables de entorno necesarias. Puedes usar .env.example como referencia.

## Ejecuta la Aplicación con Docker Compose

   docker-compose up

## Accede a la Aplicación en tu Navegador

   Abre tu navegador y accede a http://localhost:PUERTO, donde PUERTO es el puerto configurado en el archivo docker-compose.yml

## Estructura del Proyecto

    - src/: Contiene los archivos fuente de la aplicación.
       - controllers/: Controladores de la API.
       - dtos/: DTOs (Data Transfer Objects) para las validaciones.
       - entities/: Entidades de la base de datos utilizando TypeORM.
       - middleware/: Middleware para la autenticación y autorización.
       - routes/: Definición de rutas de la API.
       - utils/: Utilidades y funciones auxiliares.
    - docker-compose.yml: Archivo de configuración para Docker Compose.
    - Dockerfile: Archivo para construir la imagen de la aplicación.
    - LICENSE: Licencia del proyecto.
    - README.md: Este archivo con instrucciones y detalles del proyecto.

## Documentación de la API

    La documentación de la API está disponible en http://localhost:PUERTO/api-docs.