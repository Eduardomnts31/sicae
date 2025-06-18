// hooks/useLogin.ts
import { useState, type ChangeEvent, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import api from '../../../Api/ApiPrefix';
import { loginSuccess } from '../../../store/slices/auth/Authslice';
import type { LoginPayload } from '../../../interfaces/userProps';

interface FormData {
  email: string;
  password: string;
}

interface Errors {
  email?: string;
  password?: string;
  general?: string;
}


type OnSubmitFn = (data: any) => void;

export function useLogin(onSubmit: OnSubmitFn) {
  const [formData, setFormData] = useState<FormData>({ email: '', password: '' });
  const [errors, setErrors] = useState<Errors>({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validate = (): boolean => {
    const newErrors: Errors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'La matrícula o email es obligatorio';
    } else if (
      !(/^\d+$/.test(formData.email) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
    ) {
      newErrors.email = 'Debe ingresar una matrícula numérica o un email válido';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'La contraseña es obligatoria';
    } else if (formData.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: undefined }));
  };

const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!validate()) return;

  try {
    const payload = {
      correo: formData.email,
      contraseña: formData.password,
    };

    const { data } = await api.post('/login/', payload);
    console.log("Respuesta del backend:", data);

    const usuario = data.usuarioLogged;

    if (!usuario || !data.accessToken) {
      setErrors({ general: 'Respuesta inválida del servidor. Falta información.' });
      return;
    }

    const loginPayload: LoginPayload = {
      error: undefined,
      token: data.accessToken,
      user: {
        id: usuario.id,
        correo: usuario.correo,
        matricula: usuario.matricula,
        nombre: usuario.nombre,
        telefono: usuario.telefono,
        rol: usuario.rol
      }
    };

    dispatch(loginSuccess(loginPayload));
    onSubmit(data);
    navigate('/dashboard');

  } catch (error) {
    console.error("Error en el login:", error);
    setErrors({ general: 'Error al iniciar sesión. Verifica tus credenciales.' });
  }
};




  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
  };
}
