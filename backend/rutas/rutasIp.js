import express from "express";
import { genCodigo, ipController, ipUsuario } from "../controladores/funcionesController.js";
import { ValidarUsuario } from "../middlewares/authMid.js";


const funcRouter = new express.Router();

funcRouter.get('/server', ipController);
funcRouter.get('/usuario', ipUsuario);
funcRouter.get('/codigo', ValidarUsuario, genCodigo);

export default funcRouter; 