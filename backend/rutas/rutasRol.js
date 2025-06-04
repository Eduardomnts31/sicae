import express from 'express';
import { actualizarRol, crearRol, eliminarRol, getAllRoles, getRol } from '../controladores/rolesController.js';
const rolRoutes = new express.Router()

rolRoutes.get('/', getAllRoles);
rolRoutes.get('/:id', getRol);
rolRoutes.post('/', crearRol);
rolRoutes.put('/:id', actualizarRol);
rolRoutes.delete('/:id', eliminarRol);
//router.delete('/', eliminarTodo); comprobar este endpoint 


export default rolRoutes;