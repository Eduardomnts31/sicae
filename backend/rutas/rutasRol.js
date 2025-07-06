import express from 'express';
import { actualizarRol, crearRol, eliminarRol, eliminarTodo, getAllRoles, getRol } from '../controladores/rolesController.js';
import { ValidarUsuario } from "../middlewares/authMid.js";
const rolRoutes = new express.Router()


rolRoutes.put('/eliminarRol/:id', ValidarUsuario, eliminarRol);
rolRoutes.put('/eliminarRoles', ValidarUsuario, eliminarTodo); //comprobar este endpoint 

rolRoutes.get('/', ValidarUsuario, getAllRoles);
rolRoutes.post('/', ValidarUsuario, crearRol);
rolRoutes.get('/:id', ValidarUsuario, getRol);
rolRoutes.put('/:id', ValidarUsuario, actualizarRol);



export default rolRoutes;