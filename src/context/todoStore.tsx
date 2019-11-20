import React, { createContext,  useEffect, useReducer } from "react";
import { InitDatas } from "../interfaces/interface";
import { todoReducer } from './todoReducer';
import useFetch from "./useFetch";

export const TodoContext = createContext<any | undefined>(undefined);

const TodoStore = (props: any) => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  const setInitData = (initData: InitDatas) => {
    dispatch({ type: "SET_INIT_DATA", payload: initData })
  }

  const loading = useFetch(setInitData);

  useEffect(() => {
    console.log("새로운 내용이 렌더링됐네요", todos);
  }, [todos]);

  return (
    <TodoContext.Provider value={{ todos, loading, dispatch }}>
    { props.children }
    </TodoContext.Provider>
  );
};

export default TodoStore;
