import programas from "../modelos/programaModelos.js";


/* AQUI COMENZAREMOS CON EL CRUD */


/*LEER*/

export const getAllProgramas = async (req,res) =>{
    try {
        const selectProgramas = await programas.findAll();
        res.json(selectProgramas);
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}
export const getPrograma = async (req,res) =>{
    try {
        const selectPrograma = await programas.findAll({
            where: {
                id:req.params.id
            }
        });
        res.json(selectPrograma);
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}
/* CREAR */

export const crearPrograma = async (req, res)=>{
    try {
        await programas.create(req.body);
        res.json("PROGRAMA CREADO EXITOSAMENTE");

    } catch (error) {
        res.json({message: error.message});
    }
}


/*ELIMINAR*/

export const eliminarPrograma = async (req, res)=>{
    try {
        await programas.destroy({
            where: {id:req.params.id}
        });
        res.json("ELIMINADO EXITOSAMENTE");
    } catch (error) {
        res.json({message: error.message});
    }
}
export const eliminarTodo = async (req, res) => {
  try {
    await programas.destroy({ where: {}, truncate: true });
    res.json("SE ELIMINARON TODOS LOS DATOS");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const actualizarPrograma = async(req, res)=>{
    try {
        await programas.update(req.body,{
            where: {id:req.params.id}
        });
        res.json("PROGRAMA ACTUALIZADO EXITOSAMENTE");
    } catch (error) {
        res.json({message: error.message});
    }
}
