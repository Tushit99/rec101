import React from "react";
import { useState } from "react";
import "./todo.css";

const TodoItem = ({ todo }) => {
  const [done, setDone] = useState(true);

  return (
    <div className="todo" key={todo.id}>
      <div> {todo.value} </div>   
      <input  
        type="button" 
        onClick={() => {  
          if(done === true){
            setDone(false) 
          }
          else{
            setDone(true)
          } 
        }}   

        className={done ? "btn" : "btt"}
      />
    </div>
  );
};

export default TodoItem;
