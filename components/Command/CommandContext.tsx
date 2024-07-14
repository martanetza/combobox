import React, { createContext, useContext, useState, ReactNode } from "react";

interface CommandContextType {
  isOpen: boolean;
  toggleOpen: () => void;
  inputValue: string;
  setInputValue: (value: string) => void;
  selectedValue: string;
  setSelectedValue: (value: string) => void;
  selectedValues: string[];
  setSelectedValues: (value: string[]) => void;
  closeList: () => void;
}

const CommandContext = createContext<CommandContextType>(
  {} as CommandContextType
);

export const CommandProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedValues, setSelectedValues] = useState([""]);

  const toggleOpen = () => setIsOpen(!isOpen);
  const closeList = () => setIsOpen(false);

  return (
    <CommandContext.Provider
      value={{
        isOpen,
        toggleOpen,
        inputValue,
        setInputValue,
        selectedValue,
        setSelectedValue,
        selectedValues,
        setSelectedValues,
        closeList,
      }}
    >
      {children}
    </CommandContext.Provider>
  );
};

export const useCommand = () => {
  const context = useContext<CommandContextType>(CommandContext);
  if (!context) {
    throw new Error("useCommand must be used within a CommandProvider");
  }
  return context;
};
