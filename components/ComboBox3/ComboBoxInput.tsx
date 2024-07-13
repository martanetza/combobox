// ComboBoxInput.tsx
import React, { FC, ChangeEvent, useEffect } from "react";
import { useComboBox } from "./ComboBoxContext";

interface ComboBoxInputProps {
  placeholder?: string;
}

const ComboBoxInput: FC<ComboBoxInputProps> = ({ placeholder }) => {
  const { isOpen, toggleOpen, inputValue, setInputValue, selectedValue } =
    useComboBox();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (!isOpen) {
      setInputValue(selectedValue);
    }
  }, [isOpen, selectedValue, setInputValue]);

  return (
    <input
      type='text'
      value={isOpen ? inputValue : selectedValue}
      onClick={toggleOpen}
      onChange={handleInputChange}
      placeholder={placeholder}
    />
  );
};

export default ComboBoxInput;
