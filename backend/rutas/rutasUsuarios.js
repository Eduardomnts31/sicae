import express from "express";
import { actualizarUsuario, crearUsuario, eliminarTodo, eliminarUsuario, getAllUsuarios, getUsuario } from "../controladores/usuariosController.js";

const usuariosRoutes = new express.Router();


usuariosRoutes.put('/eliminar/:id', eliminarUsuario);
usuariosRoutes.put('/eliminar/', eliminarTodo);

usuariosRoutes.get('/', getAllUsuarios);
usuariosRoutes.get('/:id', getUsuario);
usuariosRoutes.post('/', crearUsuario);
usuariosRoutes.put('/:id', actualizarUsuario);

export default usuariosRoutes;