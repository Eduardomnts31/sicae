import codigo from "../modelos/codigoModel.js";

export const getAllCodigos = async (req, res)=>{
    try {
        const selectCodigo = await codigo.findAll();
        res.status(200).json(selectCodigo);
    } catch (error) {
       return res.status(404).json({message: error.message});
    }
}
export const getCodigo = async (req, res)=>{
    try {
        const selectCodigo = await codigo.findAll({
            where: {codigoDia:req.params.id} 
        });
        res.status(200).json(selectCodigo[0]);
    } catch (error) {
        return res.status(404).json({message: error.message});
    }
}

export const crearCodigo = async(req, res)=>{
    try {
        if(!req.body.codigoDia){
            return res.status(400).json({message:"Datos incompletos"})
        }
        await codigo.create(req.body);
        
        console.log(req.body);
        res.status(201).json("CODIGO AGREGADO A LA BBDD");

    } catch (error) {
        if(!req.body){
            return res.status(400).json({message: error.message});
        }
        return res.status(409).json({message:"Hubo un conflicto al crear el codigo", error: error.message});
    }
}

export const eliminarCodigo = async (req, res)=>{
    try {
        await codigo.update({estado: 'desactivado'},{
            where: {
                codigoDia:req.params.id
            }
        });
        res.status(200).json("CODIGO DESACTIVADO CORRECTAMENTE");
    } catch (error) {
        return res.status(404).json({message: "No se encontró dato buscado" });
    }
}
export const eliminarTodo = async (req, res) => {

  try {
    const [count] = await codigo.update(
      { estado: "desactivado" },
      { where: {} }
    );
    res.status(200).json(`SE ELIMINARON ${count}`);
  } catch (error) {
    return res.status(404).json({message: "No se encontró dato buscado" });
  }
};

export const actualizarCodigo = async (req, res )=>{
    try {
        await codigo.update(req.body, {
            where: {idCodigo:req.params.id}
        });
        res.status(200).json("CODIGO ACTUALIZADO CORRECTAMENTE");
    } catch (error) {
        return res.status(404).json({message: "No se encontró dato buscado" });
    }
}