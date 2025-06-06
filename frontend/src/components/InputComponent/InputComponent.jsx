import { Logo } from '../../Data/imagens_data';
import './inputComponent.scss'

function InputComponent({ label, iconSrc, placeholder ,onChange}) {
  return (
    <div className="input-component">
      <div className="input-container-all">
        <img src={iconSrc.url} alt={iconSrc.alt} className="input-icon" />
        <input onChange={onChange} type="text" placeholder={placeholder} className="input-field" />
      </div>
    </div>
  );
}
export default InputComponent;
