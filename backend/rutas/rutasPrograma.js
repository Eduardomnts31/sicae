import express from "express";
import { actualizarPrograma, crearPrograma, eliminarPrograma, getAllProgramas, getPrograma } from "../controladores/programaController.js";

const programasRoutes = new express.Router();

programasRoutes.get('/', getAllProgramas);
programasRoutes.get('/:id', getPrograma);
programasRoutes.post('/', crearPrograma);
programasRoutes.put('/:id', actualizarPrograma);
programasRoutes.delete('/:id', eliminarPrograma);

//router('/', eliminarTODO); comprobar si funciona este endpoint



export default programasRoutes;