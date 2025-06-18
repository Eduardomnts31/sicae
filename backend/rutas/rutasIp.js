import express from "express";
import { genCodigo, ipController, ipUsuario } from "../controladores/funcionesController.js";

const funcRouter = new express.Router();

funcRouter.get('/server', ipController);
funcRouter.get('/usuario', ipUsuario);
funcRouter.get('/codigo', genCodigo);

export default funcRouter; 