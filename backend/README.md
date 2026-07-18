# Backend — AtlasStream

Comandos rápidos:

cd backend
npm install

En desarrollo (autoreload):

npx nodemon server.js

Arrancar:

node server.js

Probar:

curl http://localhost:3000

Despliegue rápido desde móvil:

- Replit: importa el repo y ejecuta `node backend/server.js`. Añade variables de entorno desde la UI.

Advertencia de seguridad:

El archivo backend/.env fue limpiado en el último commit para evitar exponer secretos. Debes rotar las credenciales que estuvieron en ese archivo (DB, JWT_SECRET).
