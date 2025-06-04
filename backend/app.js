import express from 'express';
import cors from 'cors';
import rolRoutes from './rutas/rutasRol.js';
import programasRoutes from './rutas/rutasPrograma.js';
import db from "./database/db.js";



const app = express();
app.use(cors());
app.use(express.json())

app.use('/api/roles', rolRoutes);
app.use('/api/programas', programasRoutes);


try {
    db.authenticate();
    console.log("conexion exitosa a la BBDD");
} catch (error) {
    console.log(`Hubo un error al conectarse a la BBDD, intentalo nuevamente${error}`);
}

app.listen(8000, '0.0.0.0', ()=>{
    console.log("SERVIDOR CORRIENDO DEL BACKEND")
})