import express from 'express';
import cors from 'cors';
import rolRoutes from './rutas/rutasRol.js';
import programasRoutes from './rutas/rutasPrograma.js';
import genRoutes from './rutas/rutasGeneracion.js';
import db from "./database/db.js";



const app = express();
app.use(cors());
app.use(express.json())

app.use('/api/roles', rolRoutes);
app.use('/api/programas', programasRoutes);
app.use('/api/generaciones', genRoutes);

async function conectarDB() {
  try {
    await db.authenticate();
    console.log("Conexión exitosa a la base de datos");
  } catch (error) {
    console.log("Hubo un error al conectarse a la BBDD, inténtalo nuevamente", error);
  }
}

conectarDB();

app.listen(8000, '0.0.0.0', ()=>{
    console.log("SERVIDOR CORRIENDO DEL BACKEND")
})