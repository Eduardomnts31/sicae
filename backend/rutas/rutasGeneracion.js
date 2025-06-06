import express from "express";
import { actualizarGeneracion, crearGeneracion, eliminarGeneracion, getAllGeneraciones, getGeneracion } from "../controladores/generacionController.js";

const genRoutes = new express.Router();


genRoutes.get('/', getAllGeneraciones);
genRoutes.get('/:id', getGeneracion);
genRoutes.post('/', crearGeneracion);
genRoutes.put('/:id', actualizarGeneracion);
genRoutes.delete('/:id', eliminarGeneracion);

export default genRoutes;
