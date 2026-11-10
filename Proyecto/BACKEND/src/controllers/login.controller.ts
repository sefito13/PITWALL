import { Request, Response } from 'express';
import { LoginModel } from '../models/login.model';

export const login = async (req: Request, res: Response) => {
  const { usuario, contraseña } = req.body;

  const user = await LoginModel.validar(usuario, contraseña);

  if (!user) {
    return res.status(401).json({
      message: 'Usuario o contraseña incorrectos'
    });
  }

  res.json({
    message: 'Inicio de sesión exitoso'
  });
};