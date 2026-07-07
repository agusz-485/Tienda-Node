# Tienda-Node

## Descripción

API REST con arquitectura limpia en Node.js usando Express, Firebase Firestore y JWT.

## Requisitos

- Node.js 16+ instalado
- Cuenta de Firebase con Firestore habilitado
- Archivo `.env` configurado con las credenciales de Firebase y JWT

## Instalación

1. Clonar o abrir el proyecto en tu máquina.
2. Instalar las dependencias:

```bash
npm install express cors body-parser firebase-admin jsonwebtoken dotenv
```

3. Crear el archivo de entorno:

```bash
cp .env.example .env
```

4. Completar los valores en `.env`:

- `PORT`: puerto donde correrá la API
- `JWT_SECRET`: clave secreta para firmar tokens
- `FIREBASE_PROJECT_ID`: ID del proyecto Firebase
- `FIREBASE_CLIENT_EMAIL`: email de la cuenta de servicio
- `FIREBASE_PRIVATE_KEY`: clave privada de la cuenta de servicio (mantener los saltos de línea con `\n`)

## Estructura del proyecto

- `index.js` - punto de entrada del servidor
- `src/config` - configuración general y Firebase
- `src/routes` - definición de rutas
- `src/controllers` - controladores HTTP
- `src/services` - lógica de negocio y acceso a datos
- `src/models` - modelos de datos
- `src/middlewares` - middlewares de autenticación y errores

## Ejecutar el servidor

```bash
npm start
```

El servidor arrancará en `http://localhost:3000` (o el puerto definido en `.env`).

## Endpoints

### Autenticación

- `POST /auth/login`
  - Request body:
    ```json
    {
      "email": "admin@example.com",
      "password": "Admin1234"
    }
    ```
  - Respuesta:
    ```json
    {
      "token": "<jwt>"
    }
    ```

### Productos

- `GET /api/products`
  - Devuelve todos los productos.

- `GET /api/products/:id`
  - Devuelve un producto por ID.

- `POST /api/products/create`
  - Protegido con Bearer Token.
  - Request body:
    ```json
    {
      "name": "Nombre del producto",
      "description": "Descripción",
      "price": 100
    }
    ```

- `DELETE /api/products/:id`
  - Protegido con Bearer Token.

## Autenticación Bearer Token

Para los endpoints protegidos, agrega el header:

```http
Authorization: Bearer <token>
```

## Notas

- Si no existe un producto en `GET /api/products/:id` o `DELETE /api/products/:id`, la API responde con `404`.
- El middleware global maneja rutas no encontradas con `404` y errores de servidor con `500`.

# Proyecto-node
