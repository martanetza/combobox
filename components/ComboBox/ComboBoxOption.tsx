// ComboBoxOption.tsx
import React, { FC } from "react";
import { ComboBoxOptionProps } from "./ComboBox.types";

const ComboBoxOption: FC<ComboBoxOptionProps> = ({
  children,
  closeList,
  setSelectedValue,
  setInputValue,
  ...props
}) => {
  const handleSelect = () => {
    if (typeof children === "string") {
      setSelectedValue(children);
      setInputValue(children);
      closeList();
    }
  };
  return (
    <li className='combobox-option' onClick={handleSelect} {...props}>
      {children}
    </li>
  );
};

export default ComboBoxOption;
