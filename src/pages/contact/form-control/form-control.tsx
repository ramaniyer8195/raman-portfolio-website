import "./form-control.css";
import { FormInputProps } from "./form-control.interfaces";

const FormInput = ({ placeholder, textArea }: FormInputProps) => {
  if (textArea) {
    return (
      <textarea
        placeholder={placeholder}
        className="form__control textarea"
      ></textarea>
    );
  }

  return (
    <input type="text" placeholder={placeholder} className="form__control" />
  );
};

export default FormInput;
