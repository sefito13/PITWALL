import { loginDB } from '../config/login.config';

export interface Login {
  usuario: string;
  contraseña: string;
}

export const LoginModel = {
  validar: async (usuario: string, contraseña: string) => {
    const user = loginDB.find(
      (user) => user.usuario === usuario && user.contraseña === contraseña
    );

    return user || null;
  },
};