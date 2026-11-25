import { pool } from '../config/db';

export interface Reserva {
  id: number;
  cliente_id: number;
  producto_id: number;
  cantidad: number;
  fecha_reserva: Date;
  estado: string;
  fecha_creacion: Date;
}

type DatosReserva = Omit<Reserva, 'id' | 'fecha_creacion'>;

const CONSULTA_BASE = `
  SELECT r.*,
         c.nombre || ' ' || c.apellido AS cliente_nombre,
         p.nombre AS producto_nombre
  FROM reservas r
  JOIN clientes c ON c.id = r.cliente_id
  JOIN productos p ON p.id = r.producto_id
`;

export const ReservaModel = {
  obtenerTodos: async () => {
    const { rows } = await pool.query(`${CONSULTA_BASE} ORDER BY r.fecha_reserva DESC`);
    return rows;
  },

  obtenerPorId: async (id: number) => {
    const { rows } = await pool.query(`${CONSULTA_BASE} WHERE r.id = $1`, [id]);
    return rows[0];
  },

  crear: async (datos: DatosReserva): Promise<Reserva> => {
    const { cliente_id, producto_id, cantidad, fecha_reserva, estado } = datos;

    const { rows } = await pool.query(
      `INSERT INTO reservas (cliente_id, producto_id, cantidad, fecha_reserva, estado)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [cliente_id, producto_id, cantidad ?? 1, fecha_reserva, estado ?? 'pendiente']
    );

    return rows[0];
  },

  actualizar: async (id: number, datos: DatosReserva): Promise<Reserva | null> => {
    const { cliente_id, producto_id, cantidad, fecha_reserva, estado } = datos;

    const { rows } = await pool.query(
      `UPDATE reservas
       SET cliente_id = $1, producto_id = $2, cantidad = $3, fecha_reserva = $4, estado = $5
       WHERE id = $6
       RETURNING *`,
      [cliente_id, producto_id, cantidad ?? 1, fecha_reserva, estado ?? 'pendiente', id]
    );

    return rows[0] ?? null;
  },

  eliminar: async (id: number): Promise<boolean> => {
    const { rowCount } = await pool.query('DELETE FROM reservas WHERE id = $1', [id]);
    return (rowCount ?? 0) > 0;
  }
};