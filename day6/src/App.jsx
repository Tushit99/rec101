import React, {useState } from "react";
import "./App.css"; 
import Todo from "./components/Todo";

function App() {
  const [count, setcount] = useState(0);
  const [count1, setcount1] = useState(0); 


  return (
    <div className="App">
      <button onClick={() => setcount1(count1 + 1)}> go </button>
      <button onClick={() => setcount(count + 1)}> home </button>
      data : {count} {count1}  
      <Todo />
    </div>
  );
}

export default App;
