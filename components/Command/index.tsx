import CommandInput from "./CommandInput";
import CommandList from "./CommandList";
import CommandItem from "./CommandItem";
import BaseCommand from "./Command";

// Create a namespace for the Command components
const Command = BaseCommand as typeof BaseCommand & {
  Input: typeof CommandInput;
  List: typeof CommandList;
  Item: typeof CommandItem;
};

Command.Input = CommandInput;
Command.List = CommandList;
Command.Item = CommandItem;

export default Command;
