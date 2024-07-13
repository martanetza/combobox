import React, { FC, ReactNode } from "react";
import { useComboBox } from "./ComboBoxContext";

interface ComboBoxListProps {
  children: ReactNode;
}

const ComboBoxList: FC<ComboBoxListProps> = ({ children }) => {
  const { isOpen, closeList, setSelectedValue, setInputValue } = useComboBox();

  if (!isOpen) {
    return null;
  }

  const renderChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        closeList,
        setSelectedValue,
        setInputValue,
      });
    }
    return child;
  });

  return <ul className='combobox-list'>{renderChildren}</ul>;
};

export default ComboBoxList;
