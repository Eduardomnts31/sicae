import express from "express";
import {crearUsuario, eliminarTodo, eliminarUsuario, getAllUsuarios, getUsuario, actualizarUsuario } from "../controladores/usuariosController.js";

const usuariosRoutes = new express.Router();


usuariosRoutes.put('/eliminar/:id', eliminarUsuario);
usuariosRoutes.put('/eliminar/', eliminarTodo);
usuariosRoutes.put('/prueba/:id', actualizarUsuario);

usuariosRoutes.get('/', getAllUsuarios);
usuariosRoutes.get('/:id', getUsuario);
usuariosRoutes.post('/', crearUsuario);
//usuariosRoutes.put('/:id', actualizarUsuario);

export default usuariosRoutes;