import express from "express";
import { actualizarUsuario, crearUsuario, eliminarUsuario, getAllUsuarios, getUsuario } from "../controladores/usuariosController";

const usuariosRutas = new express.Router();

usuariosRutas.get('/', getAllUsuarios);
usuariosRutas.get('/:id', getUsuario);
usuariosRutas.post('/', crearUsuario);
usuariosRutas.put('/:id', actualizarUsuario);
usuariosRutas.delete('/:id', eliminarUsuario);

export default usuariosRutas;