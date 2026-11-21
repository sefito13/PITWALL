import { loginDB } from '../config/login.config';

export interface Login {
  usuario: string;
  contrasena: string;
}

export const LoginModel = {
  validar: async (usuario: string, contrasena: string) => {
    const user = loginDB.find(
      (user) => user.usuario === usuario && user.contrasena === contrasena
    );

    return user || null;
  },
};