import mongoose from 'mongoose';
import config from './config';

//Conexion a la base de datos
const conect = async ()=>{
    try {
        await mongoose.connect(config.URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database is conected');
    } catch (error) {
        console.log(error, 'Database is not conected');   
    };
};

conect();