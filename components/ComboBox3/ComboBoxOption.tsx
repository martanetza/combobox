// ComboBoxOption.tsx
import React, { FC } from "react";
import { useComboBox } from "./ComboBoxContext";

interface ComboBoxOptionProps {
  children: React.ReactNode;
}

const ComboBoxOption: FC<ComboBoxOptionProps> = ({ children }) => {
  const { closeList, setSelectedValue, setInputValue } = useComboBox();

  const handleSelect = () => {
    if (typeof children === "string") {
      setSelectedValue(children);
      setInputValue(children);
      closeList();
    }
  };

  return (
    <li className='combobox-option' onClick={handleSelect}>
      {children}
    </li>
  );
};

export default ComboBoxOption;
