import express from "express";
import { actualizarGeneracion, crearGeneracion, eliminarGeneracion, eliminarTodo, getAllGeneraciones, getGeneracion } from "../controladores/generacionController.js";
import { ValidarUsuario } from "../middlewares/authMid.js";

const genRoutes = new express.Router();

genRoutes.put('/eliminarGeneracion/:id',ValidarUsuario, eliminarGeneracion);
genRoutes.put('/eliminarGeneraciones/',ValidarUsuario, eliminarTodo)

genRoutes.get('/',ValidarUsuario, getAllGeneraciones);
genRoutes.get('/:id',ValidarUsuario, getGeneracion);
genRoutes.post('/',ValidarUsuario, crearGeneracion);
genRoutes.put('/:id',ValidarUsuario, actualizarGeneracion);


export default genRoutes;
