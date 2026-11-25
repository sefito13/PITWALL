import { pool } from '../config/db';

export interface Cliente {
  id: number;
  nombre: string;
  apellido: string;
  edad: number;
  sexo: string;
  email: string;
  fecha_creacion: Date;
}

type DatosCliente = Omit<Cliente, 'id' | 'fecha_creacion'>;

export const ClienteModel = {
  obtenerTodos: async (): Promise<Cliente[]> => {
    const { rows } = await pool.query('SELECT * FROM clientes ORDER BY id');
    return rows;
  },

  obtenerPorId: async (id: number): Promise<Cliente | undefined> => {
    const { rows } = await pool.query('SELECT * FROM clientes WHERE id = $1', [id]);
    return rows[0];
  },

  crear: async (datos: DatosCliente): Promise<Cliente> => {
    const { nombre, apellido, edad, sexo, email } = datos;

    const { rows } = await pool.query(
      `INSERT INTO clientes (nombre, apellido, edad, sexo, email)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [nombre, apellido, edad, sexo, email]
    );

    return rows[0];
  },

  actualizar: async (id: number, datos: DatosCliente): Promise<Cliente | null> => {
    const { nombre, apellido, edad, sexo, email } = datos;

    const { rows } = await pool.query(
      `UPDATE clientes
       SET nombre = $1, apellido = $2, edad = $3, sexo = $4, email = $5
       WHERE id = $6
       RETURNING *`,
      [nombre, apellido, edad, sexo, email, id]
    );

    return rows[0] ?? null;
  },

  eliminar: async (id: number): Promise<boolean> => {
    const { rowCount } = await pool.query('DELETE FROM clientes WHERE id = $1', [id]);
    return (rowCount ?? 0) > 0;
  }
};