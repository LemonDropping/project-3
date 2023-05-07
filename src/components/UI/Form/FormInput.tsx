import { FormatInputInterface } from '../../../types'
  
  export default function FormInput({ 
    label, 
    id, 
    type = 'text', 
    required = true, 
    placeholder = '', 
    value, 
    onChange 
}: FormatInputInterface) {
    return (
      <div className="form-group">
        <label htmlFor={id} className="form-label">
          {label}
          {required && <span className="text-red-600">*</span>}
        </label>
        <input
          id={id}
          type={type}
          required={required}
          className="form-input"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }