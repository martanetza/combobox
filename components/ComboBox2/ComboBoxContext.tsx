// ComboBoxContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

interface ComboBoxContextType {
  isOpen: boolean;
  toggleOpen: () => void;
  inputValue: string;
  setInputValue: (value: string) => void;
  selectedValue: string;
  setSelectedValue: (value: string) => void;
  closeList: () => void;
}

const ComboBoxContext = createContext<ComboBoxContextType>(
  {} as ComboBoxContextType
);

export const ComboBoxProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  const toggleOpen = () => setIsOpen(!isOpen);
  const closeList = () => setIsOpen(false);

  return (
    <ComboBoxContext.Provider
      value={{
        isOpen,
        toggleOpen,
        inputValue,
        setInputValue,
        selectedValue,
        setSelectedValue,
        closeList,
      }}
    >
      {children}
    </ComboBoxContext.Provider>
  );
};

export const useComboBox = () => {
  const context = useContext<ComboBoxContextType>(ComboBoxContext);
  if (!context) {
    throw new Error("useComboBox must be used within a ComboBoxProvider");
  }
  return context;
};
