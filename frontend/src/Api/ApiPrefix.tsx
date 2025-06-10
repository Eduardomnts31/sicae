import axios from 'axios';

const currentHost = window.location.hostname; //obtiene la url que tenemos en el navegador, en este caso seria la ip del nabegador
const res = await fetch(`http://${currentHost}:8000/api/ip`);//la colocamos para hacer un get en la api que tengo en en back
const data = await res.json();//si se cumple obtengo la ipque esta en mi controlador 

const api = axios.create({
    
    baseURL: `http://${data.ip}:8000/api`, //y la colocamos en la BASE URL para hacer la peticion de crear
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;