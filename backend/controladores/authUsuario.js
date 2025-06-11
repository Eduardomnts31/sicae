import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import usuarios from '../modelos/usuariosModels.js';

import dotenv from 'dotenv';

dotenv.config();


export const logInUsuario = async (req, res)=>{
    const {correo, contraseña} = req.body;
    
    try {

        const loginUser= await usuarios.findOne({
            where: {correo: correo}
        });
        if(!correo || !contraseña){
            return res.status(400).json({message:"DATOS INCOMPLETOS"})
        }
        if(!loginUser){
           return res.json({message: "USUARIO NO ENCONTRADO"})
        }
        
        const passValidUser = bcrypt.compareSync(contraseña, loginUser.contraseña)

        if(!passValidUser){
            return res.status(401).json({accessToken: null,message: "CONTRASEÑA INCORRECTA"});
        }

        const jwtTk = jwt.sign({
            id: loginUser.id, correo: loginUser.correo
        },process.env.JWT_TOKEN, {
            expiresIn: '1h',
            algorithm: 'HS256'
        });
        
        res.status(200).json({
            usuarioLogged: {
                id: loginUser.id,
                nombre: loginUser.nombre,
                correo: loginUser.correo,
                matricula: loginUser.matricula,
                telefono: loginUser.telefono

            },
            message:"INICIASTE SESION!",
            accessToken: jwtTk
        })

        //res.status(200).json({message: "DATOS CORRECTOS, INICIASTE SESION:D"})
        


    } catch (error) {
        res.json({message: "error al iniciar sesion", error: error.message});
    }

}

