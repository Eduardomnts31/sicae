import { notsee, see } from '../../Data/imagens_data';
import './inputComponent.scss';
import { useState } from 'react';

interface props {
  iconSrc: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  type: 'text' | 'password';
  value: string;
}

export const InputComponent = ({
  iconSrc,
  placeholder,
  onChange,
  name,
  type,
  value,
}: props) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  const inputType = type === 'password' ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className="input-component">
      <div className="input-container-all">
        <img src={iconSrc} alt="icon" className="input-icon" />
        <input
          onChange={onChange}
          type={inputType}
          name={name}
          placeholder={placeholder}
          className="input-field"
          value={value}
        />
        {type === 'password' && (
          <div className="show-password-btn" onClick={togglePassword}>
            <img
              className="show-password-img"
              src={showPassword ? notsee.url : see.url}
              alt="toggle password visibility"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default InputComponent;
