import usuarios from "../modelos/usuariosModels.js";
import bcrypt from 'bcryptjs';


export const getAllUsuarios = async (req,res)=>{
    try {
        const selectUsuarios = await usuarios.findAll();
        res.json(selectUsuarios);
    } catch (error) {
        res.json({message: error.message});
    }
}

export const getUsuario = async (req, res)=>{
    try {
        const selectUsuario = await usuarios.findAll({
            
            where: {
                id:req.params.id
            }
        })
        res.json(selectUsuario);

    } catch (error) {
        res.json({message: error.message});
    }
}

//*/
/*export const crearUsuario = async (req, res)=>{
    try {
        await usuarios.create(req.body);
        res.json("USUARIO CREADO EXITOSAMENTE");
    } catch (error) {
        res.json({message: error.message});
    }
}*/ //*metodo antiguo para crear usuario


export const crearUsuario = async (req, res)=>{
    try {
        const {nombre, matricula, contraseña, correo, telefono, programa, generacion, rol} = req.body;
        console.log(req.body)

        if(!nombre || !matricula || !contraseña){
            return res.status(400).json({message: "FAVOR DE ENVIAR DATOS"});
        }
        const hsContraseña = bcrypt.hashSync(contraseña, 8);
        console.log(contraseña);


        await usuarios.create({
            nombre,
            matricula,
            contraseña: hsContraseña,
            correo,
            telefono,
            programa,
            generacion,
            rol,
            estado:"activo"
        });
        res.status(201).json({ mensaje: "Usuario creado exitosamente" });

        } catch (error) {
        res.status(500).json({ mensaje: "Error al crear usuario", error: error.message });
    }
}

//*/
export const eliminarUsuario = async (req, res)=>{
    try {
        await usuarios.update({estado: "desactivado"}, {
            where: {
                id:req.params.id
            }            
        });
        res.json("USUARIO ELIMINADO EXITOSAMENTE");

    } catch (error) {
        res.json({message: error.message});
    }
}




export const eliminarTodo = async (req, res)=>{
    try {
        const [count] = await usuarios.update(
            {estado:"desactivado"},
           {where: {}});
        res.json(`SE ELIMINARON ${count}`);
    } catch (error) {
        res.json({message: error.message});
    }
}

export const actualizarUsuario = async(req, res)=>{
    try {
        await usuarios.update(req.body, {
            where: {id:req.params.id}   
        });
        res.json("USUARIO ACTUALIZADO CORRECTAMENTE")
    } catch (error) {
        
    }
}