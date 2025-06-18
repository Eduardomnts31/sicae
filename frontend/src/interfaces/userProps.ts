export interface LoginPayload {
  user: UserProps;
  token: string;
  type?: string;
  error?: {
    statusCode: number;
    dev_tool: string;
  };
}

export interface UserProps {
  id: number;
  correo: string;
  matricula: number;
  nombre: string;
  telefono: string;
  rol: string;
}
