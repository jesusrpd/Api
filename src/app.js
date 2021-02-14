import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
const app = express();

//Middlewares de configuración
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan("dev"));


export default app;