"use client";
import React from "react";
import Command from "@/components/Command";

export default function Home() {
  const handleSelect = (value: string) => {
    console.log("selectedOption", value);
  };

  return (
    <div>
      <div>
        <Command>
          <Command.Input placeholder='Select an option...' />
          <Command.List>
            <Command.Item>Option 1</Command.Item>
            <Command.Item>Option 2</Command.Item>
            <Command.Item>Option 3</Command.Item>
            <Command.Item onSelect={() => handleSelect("Another option")}>
              Another option
            </Command.Item>
          </Command.List>
        </Command>
      </div>
    </div>
  );
}
