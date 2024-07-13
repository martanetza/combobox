// ComboBoxInput.tsx
import React, { FC, ChangeEvent } from "react";
import { useComboBox } from "./ComboBoxContext";

interface ComboBoxInputProps {
  placeholder?: string;
}

const ComboBoxInput: FC<ComboBoxInputProps> = ({ placeholder }) => {
  const { isOpen, toggleOpen, inputValue, setInputValue, selectedValue } =
    useComboBox();

  return (
    <input
      type='text'
      value={inputValue || selectedValue}
      onClick={toggleOpen}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        setInputValue(e.target.value)
      }
      placeholder={placeholder}
    />
  );
};

export default ComboBoxInput;
