import {Router} from 'express';
import * as controllers from '../controllers/auth.controllers';
const route = Router();

//Creamos rutas para crear y logear usuarios
route.post('/register', controllers.register);

route.post('/login', controllers.login);
  
export default route;