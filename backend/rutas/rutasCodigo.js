import express from 'express';

import { ValidarUsuario } from '../middlewares/authMid.js';
import { actualizarCodigo, crearCodigo, eliminarCodigo, eliminarTodo, getAllCodigos, getCodigo } from '../controladores/codigoController.js';

const codigoRouter = new express.Router()


codigoRouter.put('/eliminarCodigo/:id', ValidarUsuario, eliminarCodigo);
codigoRouter.put('/eliminarCodigo', ValidarUsuario, eliminarTodo); //comprobar este endpoint 

codigoRouter.get('/', ValidarUsuario, getAllCodigos);
codigoRouter.post('/', ValidarUsuario, crearCodigo);
codigoRouter.get('/:id', ValidarUsuario, getCodigo);
codigoRouter.put('/:id', ValidarUsuario, actualizarCodigo);

export default codigoRouter;