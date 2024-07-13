// ComboBox.tsx
import React, { useState, ReactNode, FC } from "react";
import { ComboBoxInputProps, ComboBoxListProps } from "./ComboBox.types";
import ComboBoxInput from "./ComboBoxInput";
import ComboBoxList from "./ComboBoxList";
interface ComboBoxProps {
  children: ReactNode;
}

const ComboBox: FC<ComboBoxProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  const toggleOpen = () => setIsOpen(!isOpen);
  const closeList = () => setIsOpen(false);

  return (
    <div className='combobox'>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          if ((child.type as any) === ComboBoxInput) {
            return React.cloneElement(child, {
              isOpen,
              toggleOpen,
              inputValue,
              setInputValue,
              selectedValue,
            } as ComboBoxInputProps);
          } else if ((child.type as any) === ComboBoxList) {
            return React.cloneElement(child, {
              isOpen,
              closeList,
              setSelectedValue,
              setInputValue,
            } as ComboBoxListProps);
          }
        }
        return child;
      })}
    </div>
  );
};

export default ComboBox;
