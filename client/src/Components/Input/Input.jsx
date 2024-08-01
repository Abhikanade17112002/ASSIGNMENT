import "./Input.styles.css";
import Imports from '../../../imports';


const Input = ({ fields, handleFormValues, formValues }) => {
  const {useState} = Imports ;
  const [focused, setFocused] = useState(false);

  const handleInputFocus = () => {
    setFocused(true);
  };

  const handleInputBlur = () => {
    setFocused(false);
  };

  return (
    <div className="input-wrapper">
      <label htmlFor={fields.name}><b>{fields.label}</b></label>
      <input
        type={fields.type}
        placeholder={fields.placeholder}
        required={fields.required}
        onChange={handleFormValues}
        name={fields.name}
        id={fields.name}
        value={fields.type !== 'file' ? formValues[fields.name] : undefined}
        focused={focused.toString()}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...fields}
      />
      <span className="error-message">
        {fields.errorMessage}
      </span>
    </div>
  );
};

export default Input;
