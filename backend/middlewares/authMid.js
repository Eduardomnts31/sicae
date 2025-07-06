import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const ValidarUsuario = async (req, res, next)=>{
    // Accede correctamente al encabezado 'authorization' de la solicitud
    const authHeader = req.headers['authorization'];
    console.log(authHeader);
    // Verifica si el authHeader existe y comienza con 'Bearer '
    const tokenValid = authHeader && authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;

    if(!tokenValid){
        return res.status(403).json({message: 'Se necesita un token para acceder a esta ruta.'});
    }

    jwt.verify(tokenValid, process.env.JWT_TOKEN, (err, decoded)=>{
        if(err){
            if (err.name === 'TokenExpiredError') {
                return res.status(401).json({message: 'Tu sesión ha expirado, por favor inicia sesión nuevamente.'});
            }
            return res.status(401).json({message: 'Token inválido, verifica el token de validación.'});
        }

        req.usuario = decoded; // Adjunta la información decodificada del usuario a la solicitud
        next(); // Continúa con el siguiente middleware o manejador de ruta
    });
}