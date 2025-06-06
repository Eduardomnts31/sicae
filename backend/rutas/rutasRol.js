import express from 'express';
import { actualizarRol, crearRol, eliminarRol, eliminarTodo, getAllRoles, getRol } from '../controladores/rolesController.js';
const rolRoutes = new express.Router()


rolRoutes.put('/eliminarRol/:id', eliminarRol);
rolRoutes.put('/eliminarRoles', eliminarTodo); //comprobar este endpoint 

rolRoutes.get('/', getAllRoles);
rolRoutes.post('/', crearRol);
rolRoutes.get('/:id', getRol);
rolRoutes.put('/:id', actualizarRol);



export default rolRoutes;