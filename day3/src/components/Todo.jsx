import React from "react";
import { useState } from "react";

function Todo() {
  let [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div>
      Todo
      <input
        value={value}
        onChange={(e) => {setValue(e.target.value)}} 
        type="text" 
      />
      <button
        onClick={() => {
          setTodos([...todos, { id:Date.now(), value: value }]);
          setValue("");
        }}
      >
        Add
      </button>
      {todos.map((todo) => (
        <div key={todo.id}> <input type="checkbox" /> {todo.value} </div>
      ))}
    </div>
  );
}

export default Todo;
