import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import usuarios from '../modelos/usuariosModels.js';
import roles from '../modelos/rolesModels.js';
import blackList from '../modelos/tokenModels.js';
import dotenv from 'dotenv';

dotenv.config();


export const logInUsuario = async (req, res)=>{
    const {correo, contraseña} = req.body;
    try {

        const loginUser= await usuarios.findOne({
            where: {correo: correo}
        });

        const rolB = await roles.findOne({
            where: {id_rol: loginUser.rol}
        });
        if(!correo || !contraseña){
            return res.status(400).json({message:"DATOS INCOMPLETOS"})
        }
        if(!loginUser){
           return res.json({message: "USUARIO NO ENCONTRADO"})
        }
        
        const passValidUser = bcrypt.compareSync(contraseña, loginUser.contraseña);
        

        if(!passValidUser){
            return res.status(401).json({accessToken: null,message: "CONTRASEÑA INCORRECTA"});
        };
        const jwtTk = jwt.sign({id: loginUser.id, correo: loginUser.correo, contraseña: loginUser.contraseña},process.env.JWT_TOKEN, {expiresIn: '1h', algorithm: 'HS256'});
        
        console.log(loginUser.contraseña);
        console.log(jwt.decode(jwtTk));
        res.status(200).json({
            usuarioLogged: {
                id: loginUser.id,
                nombre: loginUser.nombre,
                correo: loginUser.correo,
                matricula: loginUser.matricula,
                telefono: loginUser.telefono,
                rol: loginUser.rol,
                nombreRol: rolB.nombre_rol,
                descripRol: rolB.descripcion
            },
            message:"INICIASTE SESION!",
            accessToken: jwtTk
        });
        


    } catch (error) {
        res.json({message: "error al iniciar sesion", error: error.message});
    }

}
export const getTokens = async(req, res)=>{
    try {
        const selectTokens = await blackList.findAll();
        res.status(200).json(selectTokens);
    } catch (error) {
       return res.status(404).json({message: error.message});
    }
}
export const getToken = async (req, res)=>{
    try {
        const selectToken = await blackList.findAll({
            where: {idToken:req.params.id} 
        });
        res.status(200).json(selectToken[0]);
    } catch (error) {
        return res.status(404).json({message: error.message});
    }
}
export const logOutUser = async (req, res) => {
    const authHeader = req.headers['authorization'];
    const tokenValid = authHeader && authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;
    if (!tokenValid) return res.status(400).json({ message: 'Token requerido' });
    try {
        const decoded = jwt.verify(tokenValid, process.env.JWT_TOKEN);
        if (!decoded || !decoded.exp) {
            return res.status(400).json({ message: 'Token inválido: falta información de expiración' })
        }
        await blackList.create({
            tokenChar: tokenValid,
            tokenExp: new Date(decoded.exp * 1000),
            estado: "desactivado"
        });
        return res.json({ message: 'Token invalidado correctamente' });
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Tu sesión ha expirado, por favor inicia sesión nuevamente.' });
        }
        return res.status(401).json({ message: 'Token inválido o expirado', error: error.message });
    }
};

export const eliminarToken = async (req, res)=>{
    try {
        await blackList.update({estado: 'desactivado'},{
            where: {
                tokenChar:req.params.id
            }
        });
        res.status(200).json("CODIGO DESACTIVADO CORRECTAMENTE");
    } catch (error) {
        return res.status(404).json({message: "No se encontró dato buscado" });
    }
}
export const eliminarTodo = async (req, res) => {

  try {
    const [count] = await blackList.update(
      { estado: "desactivado" },
      { where: {} }
    );
    res.status(200).json(`SE ELIMINARON ${count}`);
  } catch (error) {
    return res.status(404).json({message: "No se encontró dato buscado" });
  }
};

export const actualizarToken = async (req, res )=>{
    try {
        await blackList.update(req.body, {
            where: {idToken:req.params.id}
        });
        res.status(200).json("CODIGO ACTUALIZADO CORRECTAMENTE");
    } catch (error) {
        return res.status(404).json({message: "No se encontró dato buscado" });
    }
}