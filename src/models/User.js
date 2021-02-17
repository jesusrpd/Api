import {Schema, model} from 'mongoose';
import bcrypt from 'bcryptjs';

//Modelo de dato para nuestros usuarios
const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    carrito: Array,
});

//Metodos para comparar y encryptar las contraseñas de los usuarios
userSchema.statics.encryptPassword = async (password) =>{
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

userSchema.statics.comparePassword = async (password, recivedPassword) => {
    return await bcrypt.compare(password, recivedPassword);
};

export default model('User', userSchema);