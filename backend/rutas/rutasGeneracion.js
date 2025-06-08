import express from "express";
import { actualizarGeneracion, crearGeneracion, eliminarGeneracion, eliminarTodo, getAllGeneraciones, getGeneracion } from "../controladores/generacionController.js";

const genRoutes = new express.Router();

genRoutes.put('/eliminarGeneracion/:id', eliminarGeneracion);
genRoutes.put('/eliminarGeneraciones/', eliminarTodo)

genRoutes.get('/', getAllGeneraciones);
genRoutes.get('/:id', getGeneracion);
genRoutes.post('/', crearGeneracion);
genRoutes.put('/:id', actualizarGeneracion);


export default genRoutes;
