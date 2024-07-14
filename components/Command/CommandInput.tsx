import React, { FC, ChangeEvent, useEffect } from "react";
import { useCommand } from "./CommandContext";

interface CommandInputProps {
  placeholder?: string;
}

const CommandInput: FC<CommandInputProps> = ({ placeholder }) => {
  const { isOpen, toggleOpen, inputValue, setInputValue, selectedValue } =
    useCommand();

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
      onChange={handleInputChange}
      placeholder={placeholder}
    />
  );
};

export default CommandInput;
