import express from "express";
import { logOutUser } from "../controladores/authUsuario.js";
import { ValidarUsuario } from "../middlewares/authMid.js";
const lgOutUsr = new express.Router()


lgOutUsr.post('/',ValidarUsuario, logOutUser);

export default lgOutUsr;