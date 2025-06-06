import express from "express";
import { actualizarPrograma, crearPrograma, eliminarPrograma,eliminarTodo, getAllProgramas, getPrograma } from "../controladores/programaController.js";

const programasRoutes = new express.Router();


programasRoutes.put('/eliminarPrograma/:id', eliminarPrograma);
programasRoutes.put('/eliminarProgramas', eliminarTodo); // comprobar si funciona este endpoint

programasRoutes.get('/', getAllProgramas);
programasRoutes.get('/:id', getPrograma);
programasRoutes.post('/', crearPrograma);
programasRoutes.put('/:id', actualizarPrograma);




export default programasRoutes;