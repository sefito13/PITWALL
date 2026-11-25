import { Request, Response } from 'express';
import { ProductoModel } from '../models/productos.model';

export const obtenerProductos = async (req: Request, res: Response) => {
  const items = await ProductoModel.obtenerTodos();

  res.json(items);
};

export const obtenerProductoPorId = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const item = await ProductoModel.obtenerPorId(id);

  if (!item) {
    return res.status(404).json({
      message: 'Producto no encontrado'
    });
  }

  res.json(item);
};

export const crearProducto = async (req: Request, res: Response) => {
  const item = await ProductoModel.crear(req.body);

  res.status(201).json(item);
};

export const actualizarProducto = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const item = await ProductoModel.actualizar(id, req.body);

  if (!item) {
    return res.status(404).json({
      message: 'Producto no encontrado'
    });
  }

  res.json(item);
};

export const eliminarProducto = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const eliminado = await ProductoModel.eliminar(id);

  if (!eliminado) {
    return res.status(404).json({
      message: 'Producto no encontrado'
    });
  }

  res.status(204).send();
};