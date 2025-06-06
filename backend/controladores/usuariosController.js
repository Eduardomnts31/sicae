
import usuarios from "../modelos/usuariosModels.js";

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
        const selectUusario = await usuarios.findAll({
            where: {
                id:req.params.id
            }
        });
        res.json(selectUusario);
    } catch (error) {
        res.json({message: error.message});
    }
}

//*/
export const crearUsuario = async (req, res)=>{
    try {
        await usuarios.create(req.body);
        res.json("USUARIO CREADO EXITOSAMENTE");
    } catch (error) {
        res.json({message: error.message});
    }
}

//*/
export const eliminarUsuario = async (req, res)=>{
    try {
        await usuarios.destroy(req.body, {
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
        await usuarios.destroy({where: {}, truncate: true});
        res.json("SE ELIMINARON TODOS LOS DATOS");
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