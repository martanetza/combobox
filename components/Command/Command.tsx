import React, { FC, ReactNode } from "react";
import { CommandProvider } from "./CommandContext";

interface CommandProps {
  children: ReactNode;
}

const CommandComponent: FC<CommandProps> = ({ children }) => {
  return <CommandProvider>{children}</CommandProvider>;
};

export default CommandComponent;
