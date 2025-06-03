// hooks/useLogin.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function useLogin(onSubmit) {
  const [formData, setFormData] = useState({ matricula: '', password: '' });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};

    if (!formData.matricula.trim()) {
      newErrors.matricula = 'La matrícula es obligatoria';
    } else if (!/\S+@\S+\.\S+/.test(formData.matricula)) {
      newErrors.matricula = 'La matrícula debe ser un correo válido';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'La contraseña es obligatoria';
    } else if (formData.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };
  const handleLogin = async() =>{
    try {
      const response = await fetch('https://api.example.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error en la solicitud de inicio de sesión');
      }

      const data = await response.json();
      console.log('Inicio de sesión exitoso:', data);
      navigate('/dashboard');
      onSubmit(data);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setErrors({ ...errors, general: 'Error al iniciar sesión. Inténtalo de nuevo.' });
    }
  }

  const handleSubmit = (e) => {
    handleLogin();
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };


  return {
    formData,
    errors,
    handleChange,
    handleSubmit
  };
}
