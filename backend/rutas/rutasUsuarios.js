import express from "express";
import {crearUsuario, eliminarTodo, eliminarUsuario, getAllUsuarios, getUsuario, actualizarUsuario } from "../controladores/usuariosController.js";
import { ValidarUsuario } from "../middlewares/authMid.js";

const usuariosRoutes = new express.Router();


usuariosRoutes.put('/eliminar/:id', ValidarUsuario, eliminarUsuario);
usuariosRoutes.put('/eliminar/', ValidarUsuario, eliminarTodo);
usuariosRoutes.put('/prueba/:id', ValidarUsuario, actualizarUsuario);

usuariosRoutes.get('/', ValidarUsuario, getAllUsuarios);
usuariosRoutes.get('/:id', ValidarUsuario, getUsuario);
usuariosRoutes.post('/', ValidarUsuario, crearUsuario);
//usuariosRoutes.put('/:id', actualizarUsuario);

export default usuariosRoutes;