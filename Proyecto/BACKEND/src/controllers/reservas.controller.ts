import { Request, Response } from 'express';
import { ReservaModel } from '../models/reservas.model';

export const obtenerReservas = async (req: Request, res: Response) => {
  const items = await ReservaModel.obtenerTodos();

  res.json(items);
};

export const obtenerReservaPorId = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const item = await ReservaModel.obtenerPorId(id);

  if (!item) {
    return res.status(404).json({
      message: 'Reserva no encontrada'
    });
  }

  res.json(item);
};

export const crearReserva = async (req: Request, res: Response) => {
  const item = await ReservaModel.crear(req.body);

  res.status(201).json(item);
};

export const actualizarReserva = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const item = await ReservaModel.actualizar(id, req.body);

  if (!item) {
    return res.status(404).json({
      message: 'Reserva no encontrada'
    });
  }

  res.json(item);
};

export const eliminarReserva = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const eliminado = await ReservaModel.eliminar(id);

  if (!eliminado) {
    return res.status(404).json({
      message: 'Reserva no encontrada'
    });
  }

  res.status(204).send();
};