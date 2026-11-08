import { productosDB, obtenerSiguienteId } from "../config/productos.config";

export interface Producto {
    id: number;
    nombre: string;
    descripcion: string;
    categoria: string;
    precio: number;
    stock: number;
    talla: string;
    fecha_creacion: Date;
}

export const ProductoModel = {
    obtenerTodos: async () => {
        return productosDB;
    },

    obtenerPorId: async (id: number) => {
        return productosDB.find(producto => producto.id === id);
    },

    crear: async (datos: Omit<Producto, 'id' | 'fecha_creacion'>) => {
        const nuevoProducto: Producto = {
            id: obtenerSiguienteId(),
            ...datos,
            fecha_creacion: new Date()
        };

        productosDB.push(nuevoProducto);

        return nuevoProducto;
    },

    actualizar: async (id: number, datos: Omit<Producto, 'id' | 'fecha_creacion'>) => {
        const indice = productosDB.findIndex(producto => producto.id === id);

        if (indice === -1) {
            return null;
        }

        productosDB[indice] = {
            id,
            ...datos,
            fecha_creacion: productosDB[indice].fecha_creacion
        };

        return productosDB[indice];
    },

    eliminar: async (id: number) => {
        const indice = productosDB.findIndex(producto => producto.id === id);

        if (indice === -1) {
            return false;
        }

        productosDB.splice(indice, 1);

        return true;
    }
}
