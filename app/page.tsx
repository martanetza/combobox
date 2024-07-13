"use client";
import ComboBox from "@/components/ComboBox3";
export default function Home() {
  return (
    <div>
      <div>
        <ComboBox>
          <ComboBox.Input placeholder='Select an option...' />
          <ComboBox.List>
            <ComboBox.Option>Option 1</ComboBox.Option>
            <ComboBox.Option>Option 2</ComboBox.Option>
            <ComboBox.Option>Option 3</ComboBox.Option>
            <ComboBox.Option>Another option</ComboBox.Option>
          </ComboBox.List>
        </ComboBox>
      </div>
    </div>
  );
}
