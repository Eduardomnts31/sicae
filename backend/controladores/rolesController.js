
import roles from "../modelos/rolesModels.js";

/* AQUI COMENZAREMOS CON EL CRUD */


/*LEER*/
 
export const getAllRoles = async (req,res)=>{
    try {
        const selectRoles = await roles.findAll();
        res.json(selectRoles);
    } catch (error) {
        res.json({message: error.message});
    }
}

export const getRol = async ( req, res ) =>{
    try {
        const selectRol = await roles.findAll({
            where:{
                id_rol:req.params.id
            }
        });
        res.json(selectRol[0]);
    } catch (error) {
        res.json({message: error.message});
    }
}

/*CREAR*/

export const crearRol = async (req, res)=>{
    try {
        await roles.create(req.body);
        res.json("ROL CREADO EXITOSAMENTE ");
    } catch (error) {
        res.json({message: error.message});
    }
}
/*ELIMINAR*/

export const eliminarRol = async ( req, res )=>{
    try {
        await roles.update({estado: 'desactivado'},{
            where: {id_rol:req.params.id}
        });
        res.json("ROL ELIMINADO EXITOSAMENTE")
    } catch (error) {
        res.json({message: error.message});
    }
}
export const eliminarTodo = async (req, res) => {

  try {
    const [count] = await roles.update(
      { estado: "desactivado" },
      { where: {} }
    );
    res.json(`SE ELIMINARON ${count}`);
  } catch (error) {
    console.error("ERROR EN eliminarTodo:", error.message);
    res.status(500).json({ message: error.message });
  }
};



/*ACTUALIZAR*/
export const actualizarRol = async (req, res )=>{
    try {
        await roles.update(req.body, {
            where: {id_rol:req.params.id}
        });
        res.json("ROL ACTUALIZADO EXITOSAMENTE");
    } catch (error) {
        res.json({message: error.message});
    }
}