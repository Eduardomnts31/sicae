import express from 'express';
import cors from 'cors';



const app = express();
app.use(cors());
app.use(express.json())
app.get('/', (req, res)=>{
    res.send('Hola mundo');
});

app.listen(8000, '0.0.0.0', ()=>{
    console.log("SERVIDOR CORRIENDO DEL BACKEND")
})