import generaciones from "../modelos/generacionModel.js";


/* AQUI COMENZAREMOS CON EL CRUD */


/*LEER*/

export const getAllGeneraciones = async ( req, res)=>{
    try {
        const selectGeneraciones = await generaciones.findAll();
        res.json(selectGeneraciones);
    } catch (error) {
        res.json({
            message: error.message
        });
        
    }
}

export const getGeneracion = async ( req, res)=>{
    try {
        const selectGeneraciones = await generaciones.findAll({
            where: {
                id:req.params.id
            }
        });
        res.json(selectGeneraciones);
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}


/*|||||||||||||||*/
export const crearGeneracion = async (req, res)=>{
    try {
        await generaciones.create(req.body);
        res.json("PROGRAMA CREADO CON EXITO")
    } catch (error) {
         res.json({message: error.message});
    }
}

/*||||||||||||||||*/

export const eliminarGeneracion = async(req, res)=>{
    try {
        await generaciones.update({estado: 'desactivado'},{
            where: {id:req.params.id}
        });
        res.json("GENERACION ELIMINADO EXITOSAMENTE")
    } catch (error) {
        res.json({message: error.message});
    }
}
export const eliminarTodo = async (req, res)=>{
    try {
    const [count] = await generaciones.update(
      { estado: "desactivado" },
      { where: {} }
    );
    console.log(`SE ELIMINARON ${count}`);
    res.json(`SE ELIMINARON ${count}`);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}



//|||||||||||||||//
export const actualizarGeneracion = async (req, res)=>{
    try {
        await generaciones.update(req.body, {
            where: {id:req.params.id} 
        })
        res.json("ACTUALIZADO EXITOSAMENTE");
    } catch (error) {
        res.json({message: error.message});
    }
}