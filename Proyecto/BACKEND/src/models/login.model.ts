import { pool } from '../config/db';

export interface Login {
  usuario: string;
  contrasena: string;
}

export const LoginModel = {
  validar: async (usuario: string, contrasena: string) => {
    const { rows } = await pool.query(
      'SELECT id, usuario FROM usuarios WHERE usuario = $1 AND contrasena = $2',
      [usuario, contrasena]
    );

    return rows[0] || null;
  },
};