import { useRef, useState, useEffect } from 'react';
import './inputCode.scss';
import api from '../../Api/ApiPrefix';

type InputCodeProps = {
  length?: number;
  onComplete?: (code: string) => void;
  mode: 'estudiante' | 'maestro';
  className?: string;
  inputClassName?: string;
  buttonClassName?: string;
  messageClassName?: string;
};

const InputCode: React.FC<InputCodeProps> = ({
  length = 6,
  onComplete,
  mode,
  className = '',
  inputClassName = '',
  buttonClassName = '',
  messageClassName = ''
}) => {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' | 'info' } | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [code, setCode] = useState<string>('');

  useEffect(() => {
    inputsRef.current = inputsRef.current.slice(0, length);
  }, [length]);

  const getCodeFromInputs = () => {
    return inputsRef.current.map(input => input?.value ?? '').join('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    
    // Validar que sea alfanumérico y solo un carácter
    if (!/^[0-9a-zA-Z]?$/.test(value)) return;
    
    // Convertir a mayúsculas
    e.target.value = value.toUpperCase();
    
    // Mover al siguiente input si hay valor
    if (value && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
    
    // Actualizar el estado del código
    const newCode = getCodeFromInputs();
    setCode(newCode);
    
    // Auto-validar si está completo y es modo estudiante
    if (newCode.length === length && mode === 'estudiante') {
      // No auto-validamos aquí, esperamos al botón
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !e.currentTarget.value && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const generateCode = async () => {
    try {
      setLoading(true);
      setMessage(null);

      const { data } = await (await api).post('/')
      
      if (data.code && data.code.length === length) {

        data.code.split('').forEach((char: string, i: number) => {
          if (inputsRef.current[i]) {
            inputsRef.current[i]!.value = char.toUpperCase();
          }
        });
        
        setCode(data.code);
        setMessage({ text: 'Código generado exitosamente', type: 'success' });
        if (onComplete) onComplete(data.code);
      } else {
        setMessage({ text: 'El código generado no tiene la longitud correcta', type: 'error' });
      }
    } catch (error) {
      console.error('Error al generar código:', error);
      setMessage({ text: 'Error al conectar con el servidor', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const validateCode = async () => {
    const currentCode = getCodeFromInputs();
    if (currentCode.length !== length) {
      setMessage({ text: `El código debe tener ${length} caracteres`, type: 'error' });
      return;
    }

    try {
      setLoading(true);
      setMessage(null);
      
      const {data } = await (await api).post('')


      if (data.valid) {
        setMessage({ text: 'Código válido. Acceso concedido.', type: 'success' });
        if (onComplete) onComplete(currentCode);
      } else {
        setMessage({ text: 'Código inválido. Intente nuevamente.', type: 'error' });
        inputsRef.current.forEach(input => {
          if (input) input.value = '';
        });
        setCode('');
        inputsRef.current[0]?.focus();
      }
    } catch (error) {
      console.error('Error al validar código:', error);
      setMessage({ text: 'Error al conectar con el servidor', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text').slice(0, length);
    
    // Validar que todos los caracteres sean alfanuméricos
    if (!/^[0-9a-zA-Z]*$/.test(pasteData)) return;
    
    // Rellenar los inputs con los datos pegados
    pasteData.split('').forEach((char, i) => {
      if (i < length && inputsRef.current[i]) {
        inputsRef.current[i]!.value = char.toUpperCase();
      }
    });
    
    // Actualizar el estado del código
    const newCode = getCodeFromInputs();
    setCode(newCode);
    
    // Mover el foco al último carácter pegado o al último input
    const nextFocusIndex = Math.min(pasteData.length, length - 1);
    inputsRef.current[nextFocusIndex]?.focus();
  };

  return (
    <div className={`input-code-container ${className}`}>
      <div className="input-code-fields">
        {Array.from({ length }).map((_, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            ref={el => { inputsRef.current[index] = el; }}
            onChange={e => handleChange(e, index)}
            onKeyDown={e => handleKeyDown(e, index)}
            onPaste={handlePaste}
            className={`input-code-box ${inputClassName}`}
            disabled={loading}
            autoFocus={index === 0}
            aria-label={`Carácter ${index + 1} de ${length} del código`}
          />
        ))}
      </div>

      <div className="input-code-actions">
        {mode === 'maestro' ? (
          <button
            className={`generate-code-btn ${buttonClassName}`}
            onClick={generateCode}
            disabled={loading}
            aria-busy={loading}
          >
            {loading ? 'Generando...' : 'Generar código'}
          </button>
        ) : (
          <button
            className={`validate-code-btn ${buttonClassName}`}
            onClick={validateCode}
            disabled={loading || code.length !== length}
            aria-busy={loading}
          >
            {loading ? 'Validando...' : 'Validar código'}
          </button>
        )}
      </div>

      {message && (
        <div className={`input-code-message ${messageClassName} ${message.type}`}>
          {message.text}
        </div>
      )}
    </div>
  );
};

export default InputCode;