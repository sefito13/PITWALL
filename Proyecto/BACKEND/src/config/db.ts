import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

export const pool = new Pool({
host: process.env.DB_HOST,
port: Number(process.env.DB_PORT) || 5432,
user: process.env.DB_USER,
password: process.env.DB_PASSWORD,
database: process.env.DB_NAME
});

pool.on('error', (error) => {
console.error('Error inesperado en el pool de PostgreSQL:', error);
});

export const probarConexion = async (): Promise<void> => {
const client = await pool.connect();

try {
    await client.query('SELECT 1');
    console.log('✅ Conectado a PostgreSQL');
} finally {
    client.release();
}
};