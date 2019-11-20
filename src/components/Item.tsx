import React, { useContext } from "react";
import { TodoContext } from "../context/todoStore";
import { TodoItem } from "../interfaces/interface";

const Item = ({ todo }: TodoItem) => {
  const { dispatch } = useContext(TodoContext);

  const toggleItem = (e: any) => {
    const id = e.target.dataset.id;
    dispatch({ type: "CHANGE_TODO_STATUS", payload: id });
  };

  const itemClassName = todo.status === "done" ? "done" : "";

  return (
    <li data-id={todo.id} onClick={toggleItem} className={itemClassName}> {todo.title} </li>
  );
};

export default Item;
