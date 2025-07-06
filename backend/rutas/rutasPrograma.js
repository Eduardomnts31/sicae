import express from "express";
import { actualizarPrograma, crearPrograma, eliminarPrograma,eliminarTodo, getAllProgramas, getPrograma } from "../controladores/programaController.js";
import { ValidarUsuario } from "../middlewares/authMid.js";

const programasRoutes = new express.Router();


programasRoutes.put('/eliminarPrograma/:id',ValidarUsuario,  eliminarPrograma);
programasRoutes.put('/eliminarProgramas', ValidarUsuario, eliminarTodo); // comprobar si funciona este endpoint

programasRoutes.get('/', ValidarUsuario, getAllProgramas);
programasRoutes.get('/:id',ValidarUsuario,  getPrograma);
programasRoutes.post('/', ValidarUsuario, crearPrograma);
programasRoutes.put('/:id',ValidarUsuario,  actualizarPrograma);




export default programasRoutes;