import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import authRoutes from './routes/auth.routes';
import pkg from '../package.json';
const app = express();

//Middlewares de configuración
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan("dev"));

//Configuración de bienvenida
app.set('pkg', pkg);
app.get('/',(req, res)=>{
    res.send({
        name: app.get('pkg').name,
        version: app.get('pkg').version,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
    });
});

//Routes
app.use('/api/auth', authRoutes);

export default app;