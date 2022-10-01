import React, {useState} from "react";

function App() {

  const [todoList, setTodoList] = useState('')
  const [submittedTodoList, setSubmittedTodoList] = useState([]);

  const handleAdd = (event) => {
    const newValue = event.target.value;
    setTodoList(newValue)
    
  }

  const addItem = () => {
    setSubmittedTodoList(prevItems => {
      return [...prevItems,todoList]
    });
    setTodoList('');
  }

  return (
    <div className="container">
    <div className="heading">
      <h1>To-Do List</h1>
    </div>
    <div className="form">
      <input onChange={handleAdd} value={todoList} name='task' type="text" />
      <button onClick={addItem}>
        <span>Add</span>
      </button>
    </div>
    <div>
      <ul>
        {submittedTodoList.map(todoItems=> <li>{todoItems}</li>)}
      </ul>
    </div>
  </div>
    
  );
}

export default App;
