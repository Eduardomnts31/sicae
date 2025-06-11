import express from "express";
import { ipController } from "../controladores/ipController.js";

const ipRouter = new express.Router();

ipRouter.get('/', ipController);


export default ipRouter;