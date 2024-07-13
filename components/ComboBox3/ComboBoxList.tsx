// ComboBoxList.tsx
import React, { FC, ReactNode } from "react";
import { useComboBox } from "./ComboBoxContext";

interface ComboBoxListProps {
  children?: ReactNode;
}

const ComboBoxList: FC<ComboBoxListProps> = ({ children }) => {
  const { isOpen, inputValue } = useComboBox();

  if (!isOpen) return null;

  const filteredChildren = React.Children.map(children, (child) => {
    if (
      React.isValidElement(child) &&
      typeof child.props.children === "string"
    ) {
      const optionText = child.props.children.toLowerCase();
      if (optionText.includes(inputValue.toLowerCase())) {
        return child;
      }
    }
    return null;
  });

  return <ul className='combobox-list'>{filteredChildren}</ul>;
};

export default ComboBoxList;
