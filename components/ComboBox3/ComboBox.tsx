// ComboBox.tsx
import React, { FC, ReactNode } from "react";
import { ComboBoxProvider } from "./ComboBoxContext";

interface ComboBoxProps {
  children: ReactNode;
}

const ComboBoxComponent: FC<ComboBoxProps> = ({ children }) => {
  return <ComboBoxProvider>{children}</ComboBoxProvider>;
};

export default ComboBoxComponent;
