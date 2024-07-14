import React, { FC } from "react";
import { useCommand } from "./CommandContext";
import { on } from "events";

interface CommandItemProps {
  children: string;
  onSelect?: (value: string) => void;
}

const CommandItem: FC<CommandItemProps> = ({ children, onSelect }) => {
  const {
    closeList,
    setSelectedValue,
    setSelectedValues,
    selectedValues,
    setInputValue,
  } = useCommand();

  const handleSelect = () => {
    onSelect && onSelect(children);
    if (typeof children === "string") {
      // closeList();

      if (selectedValues.includes(children)) {
        setSelectedValues(selectedValues.filter((item) => item !== children));
      } else {
        setSelectedValues([...selectedValues, children]);
      }
    }
  };

  const isChecked = selectedValues.includes(children);

  return (
    <li className='Command-option'>
      <label onClick={handleSelect}>
        <input type='checkbox' name='option' value={children} />
        {children}
      </label>
    </li>
  );
};

export default CommandItem;
