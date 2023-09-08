import { Todo } from "./todo.model";

export interface TaskInputProps {
    isEditting: boolean;
    itemToEdit: Todo;
    setItemToEdit: React.Dispatch<React.SetStateAction<Todo>>;
    setDisplayOnright: React.Dispatch<React.SetStateAction<String>>;
    handleTodoInput: Function;
}