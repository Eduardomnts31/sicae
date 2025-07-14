// ApiPrefix.ts
import axios from 'axios';

const apiPromise = (async () => {
  try {
    const currentHost = window.location.hostname;
    const res = await fetch(`http://${currentHost}:8000/api/util/server`);
    const data = await res.json();

    return axios.create({
      baseURL: `http://${data.ip}:8000/api`,
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImNvcnJlbyI6ImlzaWNAZ21haWwuY29tIiwiY29udHJhc2XDsWEiOiIkMmIkMDgkaUcyWkdaL2dUeGIwaDNGUXV3bEUwdXNWQ004dE80U0tQOG4zSDBWT0NLQkx0RjJVSUI4VFciLCJpYXQiOjE3NTI0NTI2NTYsImV4cCI6MTc1MjQ1NjI1Nn0.f8ZzwTXLreYZHrRIjZFnJr4pNMKFbfe3feht0TlH5OU',//HAY QUE VER LA MANERA DE OCULTAR EL TOKEN, TECNICAMENTE EL TOKEN YA TE LO ENVIA EL BACKEND SOLO ES TEM DE CAPTURARLO Y TENERLO AQUI YA SEA COMO VARIABLE
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error("Error al configurar API:", error);
    return axios.create({
      baseURL: '',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
})();

export default apiPromise;
