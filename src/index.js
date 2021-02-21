import config from './config';
import app from './app';
import './database';

//Iniciamos el servidor
const init = async ()=>{
    await app.listen(config.PORT);
    console.log(`Server init ${config.PORT}`);
};

init();