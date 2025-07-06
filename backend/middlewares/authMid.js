import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const ValidarUsuario = async (req, res, next)=>{
    // Accede correctamente al encabezado 'authorization' de la solicitud
    const authHeader = req.headers['authorization'];

    // Verifica si el authHeader existe y comienza con 'Bearer '
    const tokenValid = authHeader && authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;

    if(!tokenValid){
        return res.status(403).json({message: 'Se necesita un token para acceder a esta ruta.'});
    }

    jwt.verify(tokenValid, process.env.TOKEN, (err, decoded)=>{ // Considera renombrar tu variable de entorno para mayor claridad
        if(err){
            // Usa mensajes diferentes para token expirado vs. inválido para una mejor depuración
            if (err.name === 'TokenExpiredError') {
                return res.status(401).json({message: 'Tu sesión ha expirado, por favor inicia sesión nuevamente.'});
            }
            return res.status(401).json({message: 'Token inválido, por favor inicia sesión nuevamente.'});
        }

        req.usuario = decoded; // Adjunta la información decodificada del usuario a la solicitud
        next(); // Continúa con el siguiente middleware o manejador de ruta
    });
}