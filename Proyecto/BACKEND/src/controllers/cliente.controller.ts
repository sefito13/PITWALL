import { Request, Response } from 'express';
import { ClienteModel } from '../models/clientes.model';

export const obtenerClientes = async (req: Request, res: Response) => {
  const items = await ClienteModel.obtenerTodos();

  res.json(items);
};

export const obtenerClientePorId = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const item = await ClienteModel.obtenerPorId(id);

  if (!item) {
    return res.status(404).json({
      message: 'Cliente no encontrado'
    });
  }

  res.json(item);
};

export const crearCliente = async (req: Request, res: Response) => {
  const item = await ClienteModel.crear(req.body);

  res.status(201).json(item);
};

export const actualizarCliente = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const item = await ClienteModel.actualizar(id, req.body);

  if (!item) {
    return res.status(404).json({
      message: 'Cliente no encontrado'
    });
  }

  res.json(item);
};

export const eliminarCliente = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const eliminado = await ClienteModel.eliminar(id);

  if (!eliminado) {
    return res.status(404).json({
      message: 'Cliente no encontrado'
    });
  }

  res.status(204).send();
};