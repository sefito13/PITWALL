import { Request, Response } from 'express';
import { ProductoModel } from '../models/productos.model';

export const obtenerProductos = async (req: Request, res: Response) => {
    const productos = await ProductoModel.obtenerTodos();

    res.json(productos);
}

export const obtenerProductoPorId = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    const producto = await ProductoModel.obtenerPorId(id);

    if (!producto) {
        return res.status(404).json({
            message: 'Producto no encontrado'
        });
    }

    res.json(producto);
};

export const crearProducto = async (req: Request, res: Response) => {
    const producto = await ProductoModel.crear(req.body);

    res.status(201).json(producto);
};

export const actualizarProducto = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    const producto = await ProductoModel.actualizar(id, req.body);

    if (!producto) {
        return res.status(404).json({
            message: 'Producto no encontrado'
        })
    }
    res.json(producto);
}

export const eliminarProducto = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    const eliminado = await ProductoModel.eliminar(id);

    if (!eliminado) {
    return res.status(404).json({
      message: 'Cliente no encontrado'
    });
  }

  res.status(204).send();
};
