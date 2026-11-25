import { pool } from '../config/db';

export interface Producto {
  id: number;
  nombre: string;
  descripcion: string | null;
  precio: number;
  stock: number;
  fecha_creacion: Date;
}

type DatosProducto = Omit<Producto, 'id' | 'fecha_creacion'>;

export const ProductoModel = {
  obtenerTodos: async (): Promise<Producto[]> => {
    const { rows } = await pool.query('SELECT * FROM productos ORDER BY id');
    return rows;
  },

  obtenerPorId: async (id: number): Promise<Producto | undefined> => {
    const { rows } = await pool.query('SELECT * FROM productos WHERE id = $1', [id]);
    return rows[0];
  },

  crear: async (datos: DatosProducto): Promise<Producto> => {
    const { nombre, descripcion, precio, stock } = datos;

    const { rows } = await pool.query(
      `INSERT INTO productos (nombre, descripcion, precio, stock)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [nombre, descripcion ?? null, precio, stock ?? 0]
    );

    return rows[0];
  },

  actualizar: async (id: number, datos: DatosProducto): Promise<Producto | null> => {
    const { nombre, descripcion, precio, stock } = datos;

    const { rows } = await pool.query(
      `UPDATE productos
       SET nombre = $1, descripcion = $2, precio = $3, stock = $4
       WHERE id = $5
       RETURNING *`,
      [nombre, descripcion ?? null, precio, stock ?? 0, id]
    );

    return rows[0] ?? null;
  },

  eliminar: async (id: number): Promise<boolean> => {
    const { rowCount } = await pool.query('DELETE FROM productos WHERE id = $1', [id]);
    return (rowCount ?? 0) > 0;
  }
};