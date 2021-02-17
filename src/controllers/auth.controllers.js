import User from '../models/User';
import jwt from 'jsonwebtoken';
import config from '../config';

export const register = async (req, res)=>{
    //Creamos un nuevo usuario y lo guardamos en la base de datos
    const {username, password, email} = req.body;
    const newUser = new User({
        username, 
        email, 
        //Encriptamos la ccontraseña del nuevo usuario
        password: await User.encryptPassword(password)
    });

    //Guardamos usuario en la BD
    await newUser.save();

    //Generamos token
    const token = jwt.sign({id: newUser._id}, config.SECRET, {
        expiresIn: 86400 //24 horas
    });
    res.status(200).json({token});
};

export const login = async (req, res)=>{

    //Logeamos un usuario y comprobamos si su correo y contraseña son correctos
    const {email, password} = req.body;

    const user = await User.findOne({email});
    if(!user) return res.status(401).json({message: 'Usuario no encontrado'});

    const passwordIsValid = await User.comparePassword(password, user.password);
    if(!passwordIsValid) return res.status(500).json({message: 'Contraseña invalida'});

    const token = jwt.sign({id: user._id}, config.SECRET, {
        expiresIn: 86400 //24 horas
    });

    res.status(200).json(token);
};