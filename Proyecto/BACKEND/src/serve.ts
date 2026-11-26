import app from "./app";
import { pool } from "./config/db";

const PORT = Number(process.env.PORT) || 3000;

async function iniciar() {
  try {
    await pool.connect();
    console.log("Conectado a PostgreSQL");

    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error al iniciar el servidor:", error);
    process.exit(1);
  }
}

iniciar();