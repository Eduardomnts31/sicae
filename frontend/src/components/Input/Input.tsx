import React from 'react';

interface InputProps {
  type: 'text' | 'password' | 'file';
  name: string;
  label: string;
  hasLabel?: boolean;
  onClick?: () => void;
  value?: string; // solo para text/password
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void; // también se usa para archivos
  placeholder?: string;
  className?: string;
  accept?: string; // para archivos, ej: ".pdf,.docx,image/*"
  multiple?: boolean;
}

export const Input: React.FC<InputProps> = ({
  type,
  name,
  label,
  hasLabel = true,
  onClick,
  value,
  onChange,
  placeholder,
  className,
  accept,
  multiple = false,
}) => {
  return (
    <div className={`input-wrapper ${className || ''}`}>
      {hasLabel && <label htmlFor={name}>{label}</label>}

      <input
        type={type}
        name={name}
        id={name}
        onClick={onClick}
        onChange={onChange}
        value={type !== 'file' ? value : undefined} 
        placeholder={type !== 'file' ? placeholder : undefined}
        accept={type === 'file' ? accept : undefined}
        multiple={type === 'file' ? multiple : undefined}
      />
    </div>
  );
};
