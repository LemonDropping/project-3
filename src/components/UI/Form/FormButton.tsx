import {FormButtonInterface} from '../../../types'

export default function FormButton({ 
  type, 
  text, 
  disabled = false, 
  onClick 
}: FormButtonInterface) {
    return (
      <button
        type={type}
        className="form-button"
        disabled={disabled}
        onClick={onClick}
      >
        {text}
      </button>
    );
  }