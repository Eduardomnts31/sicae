import express from "express";
import { crearAsistencia, eliminarAsistencia, eliminarTodo, getAllAsistencias, getAsistencia, actualizarAsistencia } from "../controladores/asistenciaController.js";
import { ValidarUsuario } from "../middlewares/authMid.js";

const asisRoutes = new express.Router();

asisRoutes.put('/eliminarAsistiencia/:id', ValidarUsuario, eliminarAsistencia);
asisRoutes.put('/eliminarAsistencias/', ValidarUsuario, eliminarTodo)

asisRoutes.get('/', ValidarUsuario, getAllAsistencias);
asisRoutes.get('/:id', ValidarUsuario, getAsistencia);
asisRoutes.post('/', ValidarUsuario, crearAsistencia);
asisRoutes.put('/:id', ValidarUsuario, actualizarAsistencia);

export default asisRoutes;