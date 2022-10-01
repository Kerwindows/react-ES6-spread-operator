import React, { useState } from "react";
import TodoItem from "./TodoItem";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState("");
  const [submittedTodoList, setSubmittedTodoList] = useState([]);

  const handleAdd = (event) => {
    const newValue = event.target.value;
    setTodoList(newValue);
  };

  const addItem = () => {
    setSubmittedTodoList((prevItems) => {
      //add newer items to the top
      return [todoList, ...prevItems];
    });
    setTodoList("");
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleAdd} value={todoList} name="task" type="text" />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {submittedTodoList.map((todoItems, _id) => (
            <TodoItem key={_id} id={_id} text={todoItems} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
