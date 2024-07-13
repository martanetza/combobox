// ComboBoxOption.tsx
import React, { FC } from "react";
import { useComboBox } from "./ComboBoxContext";

interface ComboBoxOptionProps {
  children: React.ReactNode;
  closeList?: () => void;
  setSelectedValue?: (value: string) => void;
  setInputValue?: (value: string) => void;
}

const ComboBoxOption: FC<ComboBoxOptionProps> = ({
  children,
  closeList,
  setSelectedValue,
  setInputValue,
}) => {
  const handleSelect = () => {
    if (
      typeof children === "string" &&
      setSelectedValue &&
      setInputValue &&
      closeList
    ) {
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
