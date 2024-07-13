import React, { FC, ChangeEvent } from "react";
import { ComboBoxInputProps } from "./ComboBox.types";

const ComboBoxInput: FC<ComboBoxInputProps> = ({
  isOpen,
  toggleOpen,
  inputValue,
  setInputValue,
  selectedValue,
  placeholder,
  ...props
}) => {
  return (
    <input
      type='text'
      value={inputValue || selectedValue}
      onClick={toggleOpen}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        setInputValue(e.target.value)
      }
      placeholder={placeholder}
      {...props}
    />
  );
};

export default ComboBoxInput;
