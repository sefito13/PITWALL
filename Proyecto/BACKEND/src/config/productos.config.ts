import type { Producto } from '../models/productos.model';

export const productosDB: Producto[] = [
  {
    id: 1,
    nombre: 'Gorra Oficial Equipo 2026',
    descripcion: 'Gorra ajustable con logo bordado del equipo y patrocinadores',
    categoria: 'Ropa',
    precio: 89.99,
    stock: 150,
    talla: 'Única',
    fecha_creacion: new Date('2026-10-05T18:00:00.000Z')
  },
  {
    id: 2,
    nombre: 'Camiseta Piloto Edición Limitada',
    descripcion: 'Camiseta de algodón con el número y firma estampada del piloto',
    categoria: 'Ropa',
    precio: 129.99,
    stock: 80,
    talla: 'M',
    fecha_creacion: new Date('2026-10-05T18:05:00.000Z')
  },
  {
    id: 3,
    nombre: 'Réplica Casco Piloto 1:2',
    descripcion: 'Réplica a escala 1:2 del casco oficial del piloto, con acabado en pintura brillante',
    categoria: 'Coleccionables',
    precio: 349.99,
    stock: 25,
    talla: 'N/A',
    fecha_creacion: new Date('2026-10-05T18:10:00.000Z')
  }
];

let siguienteId = productosDB.length + 1;

export const obtenerSiguienteId = (): number => {
    const id = siguienteId;
    siguienteId += 1;

    return id;
};