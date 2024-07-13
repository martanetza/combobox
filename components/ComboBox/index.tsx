import ComboBoxInput from "./ComboBoxInput";
import ComboBoxList from "./ComboBoxList";
import ComboBoxOption from "./ComboBoxOption";
import BaseComboBox from "./ComboBox";

// Create a namespace for the ComboBox components
const ComboBox = BaseComboBox as typeof BaseComboBox & {
  Input: typeof ComboBoxInput;
  List: typeof ComboBoxList;
  Option: typeof ComboBoxOption;
};

ComboBox.Input = ComboBoxInput;
ComboBox.List = ComboBoxList;
ComboBox.Option = ComboBoxOption;

export default ComboBox;
