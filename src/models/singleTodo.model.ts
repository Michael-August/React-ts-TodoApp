import { Todo } from "./todo.model";

export interface SingleTodoProps {
    todo: Todo;
    onCompleted: Function;
    receiveTodo: Function;
    checked: boolean
}