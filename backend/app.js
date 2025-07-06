import express from 'express';
import cors from 'cors';
import rolRoutes from './rutas/rutasRol.js';
import programasRoutes from './rutas/rutasPrograma.js';
import genRoutes from './rutas/rutasGeneracion.js';
import usuariosRoutes from './rutas/rutasUsuarios.js';
import db from "./database/db.js";
import lgInUsr from './rutas/rutasLogIn.js';
import funcRouter from './rutas/rutasIp.js';
import asisRoutes from './rutas/rutasAsistencias.js';
import codigoRouter from './rutas/rutasCodigo.js';
const app = express();
app.use(cors());
app.use(express.json());




app.use('/api/roles', rolRoutes);//api crud roles
app.use('/api/programas', programasRoutes);//api crud programas
app.use('/api/generaciones', genRoutes);//api crud generaciones
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/login', lgInUsr);
app.use('/api/asistencia', asisRoutes);
app.use('/api/codigo', codigoRouter)

app.use('/api/util', funcRouter);
app.use('/api/util', funcRouter);
app.use('/api/util', funcRouter);
async function conectarDB() {
  try {
    await db.authenticate();
    console.log("Conexión exitosa a la base de datos");
  } catch (error) {
    console.log("Hubo un error al conectarse a la BBDD, inténtalo nuevamente", error);
  }
}
conectarDB();

app.listen(8000, '0.0.0.0', (req, res)=>{
    console.log("SERVIDOR CORRIENDO DEL BACKEND");
})