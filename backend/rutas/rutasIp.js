import express from "express";
import { genCodigo, ipController, ipUsuario } from "../controladores/funcionesController.js";
import { ValidarUsuario } from "../middlewares/authMid.js";


const funcRouter = new express.Router();

funcRouter.get('/server', ValidarUsuario,ipController);
funcRouter.get('/usuario', ValidarUsuario,ipUsuario);
funcRouter.get('/codigo', ValidarUsuario, genCodigo);

export default funcRouter; 