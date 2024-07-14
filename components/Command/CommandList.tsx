import React, { FC, ReactNode, Children, isValidElement } from "react";
import { useCommand } from "./CommandContext";

interface CommandListProps {
  children?: ReactNode;
}

const CommandList: FC<CommandListProps> = ({ children }) => {
  const { isOpen, inputValue } = useCommand();

  if (!isOpen) return null;

  const filteredChildren = Children.map(children, (child) => {
    if (isValidElement(child) && typeof child.props.children === "string") {
      const optionText = child.props.children.toLowerCase();
      if (optionText.includes(inputValue.toLowerCase())) {
        return child;
      }
    }
    return null;
  });

  return <ul className='Command-list'>{filteredChildren}</ul>;
};

export default CommandList;
