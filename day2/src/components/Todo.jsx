import React from "react";
import { useState } from "react";
import TodoItem from "./TodoItem";

function Todo() {
  let [value, setValue] = useState("");
  const [todo, setTodo] = useState([]);

  return (
    <div>
      {todo.map((todo) => (
       <TodoItem key={todo.id} todo={todo} />
      ))}
      <input   
        value={value}   
        onChange={(e) => {  
          setValue(e.target.value);    
        }}
        placeholder="Write Something"  
      />
      <button
        onClick={() => {
        setTodo([...todo, { id: Date.now(), value: value }]);
          setValue("");
        }}
      >
        +
      </button>
    </div>
  );
}

export default Todo;
