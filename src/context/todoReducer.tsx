import { Action, Todo, Todos } from "../interfaces/interface";

export const todoReducer = (todos: Todos, action: Action): any => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...todos,
        { id: todos.length, title: action.payload, status: "todo" }
      ];

    case "SET_INIT_DATA":
      return action.payload;

    case "CHANGE_TODO_STATUS":
      return todos.map((todo: Todo) => {
        if (todo.id === +action.payload) {
          if (todo.status === "done") { todo.status = "todo"; } 
          else { todo.status = "done"; }
        }
        return todo;
      });

    default:
      break;
  }
};
