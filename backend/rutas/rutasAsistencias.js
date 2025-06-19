import express from "express";
import { crearAsistencia, eliminarAsistencia, eliminarTodo, getAllAsistencias, getAsistencia, actualizarAsistencia } from "../controladores/asistenciaController.js";

const asisRoutes = new express.Router();

asisRoutes.put('/eliminarAsistiencia/:id', eliminarAsistencia);
asisRoutes.put('/eliminarAsistencias/', eliminarTodo)

asisRoutes.get('/', getAllAsistencias);
asisRoutes.get('/:id', getAsistencia);
asisRoutes.post('/', crearAsistencia);
asisRoutes.put('/:id', actualizarAsistencia);

export default asisRoutes;