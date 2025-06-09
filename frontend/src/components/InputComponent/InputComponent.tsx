import './inputComponent.scss';
interface props {
  iconSrc: string
  , placeholder: string
  , onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  , name: string
  , type: 'text' | 'password'
  , value: string
}

export const InputComponent = ({iconSrc, placeholder, onChange, name, type,value }: props) => {
  return (
    <div className="input-component">
      <div className="input-container-all">
        <img src={iconSrc} alt={iconSrc} className="input-icon" />
        <input
          onChange={ onChange}
          type={type}
          name={name}
          placeholder={placeholder}
          className="input-field"
          value={value}
        />
      </div>
    </div>
  );
}
export default InputComponent;
