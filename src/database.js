import mongoose from 'mongoose';
import config from './config';

//Conexion a la base de datos
mongoose.connect(config.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log('Database is conected'))
.catch(err => console.log(err, 'Database is not conected'));