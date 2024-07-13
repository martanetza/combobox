// ComboBoxList.tsx
import React, { FC } from "react";
import { ComboBoxListProps, ComboBoxOptionProps } from "./ComboBox.types";

const ComboBoxList: FC<ComboBoxListProps> = ({
  isOpen,
  closeList,
  children,
  setSelectedValue,
  setInputValue,
}) => {
  if (!isOpen) return null;
  return (
    <ul className='combobox-list'>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            closeList,
            setSelectedValue,
            setInputValue,
          } as ComboBoxOptionProps);
        }
        return child;
      })}
    </ul>
  );
};

export default ComboBoxList;
