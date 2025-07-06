import os from 'os';
//funcion para obtener la ip del servidor
export const ipController = (req, res) => {
  try {
    const interfaces = os.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
      for (const iface of interfaces[name]) {
        if (iface.family === 'IPv4' && !iface.internal) {
          return res.json({ip: iface.address });
        }
      }
    }
  } catch (error) {
    res.json({ message: "Hubo un error en la petición", error });
  }
};

//funcion para obtener la ip del usuario entrante (para la asistencia);
export const ipUsuario = (req, res) => {
  try {
    const forwarded = req.headers['x-forwarded-for'];
    const ip = forwarded ? forwarded.split(',')[0] : req.socket.remoteAddress;
    res.json({ ip });
  } catch (error) {
    res.json({
      message: "Hubo un error al obtener la IP",
      error: error.message
    });
  }
};
export const genCodigo = (req, res)=>{
  try {
    const codigo = Math.random().toString(36).substring(2, 8).toUpperCase();
    res.json(codigo);
  } catch (error) {
    res.json({message: error.message});
  }
}
