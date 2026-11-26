import express from 'express';
import cors from 'cors';

import clientesRoutes from './routes/clientes.routes';
import productosRoutes from './routes/productos.routes';
import loginRoutes from './routes/login.routes';
import reservasRoutes from './routes/reservas.routes';

const app = express();

app.use(
  cors({
    origin: [
      'https://pitwall-production-005508e2.up.railway.app',
      'http://localhost:4200',
      'http://localhost:4000',
    ],
    credentials: true,
  }),
);

app.use(express.json());

app.get('/api/v1/health', (req, res) => {
  res.json({
    status: 'OK',
  });
});

app.use('/api/v1/clientes', clientesRoutes);
app.use('/api/v1/productos', productosRoutes);
app.use('/api/v1/login', loginRoutes);
app.use('/api/v1/reservas', reservasRoutes);

export default app;