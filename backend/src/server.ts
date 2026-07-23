import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./config/database";
import routes from "./routes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Probar conexión con PostgreSQL
async function testDatabaseConnection() {
  try {
    const result = await pool.query("SELECT NOW()");
    console.log("🟢 PostgreSQL conectado correctamente.");
    console.log("🕒 Hora del servidor:", result.rows[0].now);
  } catch (error) {
    console.error("🔴 Error al conectar con PostgreSQL.");
    console.error(error);
  }
}

// Ruta principal
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>AtlasStream API</title>

      <style>
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        body{
          background:#0f172a;
          color:#fff;
          font-family:Arial,sans-serif;
          display:flex;
          justify-content:center;
          align-items:center;
          height:100vh;
        }

        .card{
          background:#1e293b;
          padding:40px;
          border-radius:18px;
          width:720px;
          box-shadow:0 0 30px rgba(0,0,0,.45);
        }

        .brand{
          color:#94a3b8;
          font-size:14px;
          letter-spacing:2px;
          text-transform:uppercase;
          margin-bottom:10px;
        }

        h1{
          color:#38bdf8;
          margin-bottom:25px;
        }

        h2{
          margin-top:30px;
          margin-bottom:15px;
        }

        p{
          margin:10px 0;
          font-size:18px;
        }

        ul{
          margin-left:25px;
          line-height:2;
        }

        li{
          color:#e2e8f0;
        }

        hr{
          margin:30px 0;
          border:none;
          height:1px;
          background:#334155;
        }

        .footer{
          display:flex;
          justify-content:space-between;
          align-items:center;
          color:#94a3b8;
          font-size:14px;
        }

        .company{
          color:#38bdf8;
          font-weight:bold;
        }
      </style>
    </head>

    <body>

      <div class="card">

        <div class="brand">
          Developed by <span class="company">ultramegared</span>
        </div>

        <h1>🚀 AtlasStream API</h1>

        <p><strong>Estado:</strong> Online ✅</p>
        <p><strong>Versión:</strong> 1.0.0</p>

        <h2>Endpoints disponibles</h2>

        <ul>
          <li>/api/auth</li>
          <li>/api/users</li>
          <li>/api/movies</li>
        </ul>

        <hr>

        <div class="footer">
          <span>AtlasStream API v1.0.0</span>
          <span>© 2026 <span class="company">ultramegared</span></span>
        </div>

      </div>

    </body>
    </html>
  `);
});

// Registrar todas las rutas
app.use("/api", routes);

const PORT = process.env.PORT || 3000;

// Iniciar servidor
app.listen(PORT, async () => {
  console.log(`🚀 Servidor iniciado en el puerto ${PORT}`);

  await testDatabaseConnection();
});