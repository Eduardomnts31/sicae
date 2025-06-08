import express from "express";
import { logInUsuario } from "../controladores/authUsuario.js";

const lgInUsr = new express.Router()


lgInUsr.post('/', logInUsuario);

export default lgInUsr;