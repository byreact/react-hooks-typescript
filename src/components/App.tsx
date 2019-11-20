import React from "react";
import TodoStore from "../context/todoStore";
import Form from "./Form";
import Header from "./Header";
import List from "./List";

const App = () => {
  return (
    <TodoStore>
      <Header />
      <Form />
      <List />
    </TodoStore>
  );
};

export default App;
