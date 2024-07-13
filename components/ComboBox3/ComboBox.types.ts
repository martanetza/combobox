// ComboBox.types.ts
import { ReactNode } from "react";

export interface ComboBoxInputProps {
  placeholder?: string;
}

export interface ComboBoxListProps {
  children: ReactNode;
}

export interface ComboBoxOptionProps {
  children: ReactNode;
}
