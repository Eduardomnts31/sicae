import asistencias from "../modelos/asistenciaModel.js";


export const getAllAsistencias = async (req, res)=>{
    
   try {
        const selectAsistencia = await asistencias.findAll();
        res.json(selectAsistencia);
    } catch (error) {
        res.json({message: error.message});
    }
}

export const getAsistencia = async(req,res)=>{
    try {
        const selectAsistencia = await asistencias.findAll({
            where: {id_asistencia: req.params.id}
        });
        res.json(selectAsistencia);

    } catch (error) {
        res.json({message: error.message});
    }
}

export const crearAsistencia = async (req, res)=>{
    try {
        await asistencias.create(req.body);
        res.json("CREADO EXITOSAMENTE");
    } catch (error) {
        res.json({message: error.message});
    }
}

export const eliminarAsistencia = async (req, res)=>{
    try {
       await asistencias.update({estado: "Desactivado"}, {
        where: {id_asistencia:req.params.id}
       });
       res.json("ELIMINADO EXITOSAMENTE"); 
    } catch (error) {
        res.json({message: error.message});
    }
}
export const eliminarTodo = async (req, res)=>{
    try {
        const [count] = await asistencias.update({estado: "Desactivado"}, 
            {where: {}}
        );
        res.json(`Se ha desactivado todo ${count}`);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const actualizarAsistencia = async (req, res)=>{
    try {
        await asistencias.update(req.body,{
            where:{id:req.params.id}
        });
        res.json("SE ACTUALIZO EL DATO");
    } catch (error) {
        res.json({message: error.message});
    }
   
}

