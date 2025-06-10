import os from 'os';
export const ipController = (req, res) => {
  try {
    const interfaces = os.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
      for (const iface of interfaces[name]) {
        if (iface.family === 'IPv4' && !iface.internal) {
          return res.json({ ip: iface.address });
        }
      }
    }
    res.json({ ip: 'localhost' });
  } catch (error) {
    res.json({ message: "Hubo un error en la petición", error });
  }
};
