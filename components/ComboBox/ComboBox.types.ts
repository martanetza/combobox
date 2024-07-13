import { ReactNode } from "react";

export interface ComboBoxInputProps {
  isOpen: boolean;
  toggleOpen: () => void;
  inputValue: string;
  setInputValue: (value: string) => void;
  selectedValue: string;
  placeholder?: string;
}

export interface ComboBoxListProps {
  isOpen: boolean;
  closeList: () => void;
  children: ReactNode;
  setSelectedValue: (value: string) => void;
  setInputValue: (value: string) => void;
}

export interface ComboBoxOptionProps {
  children: ReactNode;
  closeList: () => void;
  setSelectedValue: (value: string) => void;
  setInputValue: (value: string) => void;
}
