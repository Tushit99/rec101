import React, { useEffect, useState } from "react";

const Todo = () => {
  const [newtodo, setNewtodo] = useState("");
  const [todo, settode] = useState([]);

  const saveInfo = () => {
    fetch("http://localhost:8060/todo", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
      value: newtodo,  
      iscompleted: false,
      mobile: true,
      }), 
    })
      .then((r) => r.json())
      .then((d) => {
        settode([...todo, d]);
        setNewtodo("");
      });
  };

  useEffect(() => {
    fetch("http://localhost:8060/todo")
      .then((e) => e.json())
      .then((d) => {
        settode(d);
        console.log(d);
      });
  }, []);

  return (
    <div>
      <div>
        <input
          value={newtodo}
          onChange={({ target }) => setNewtodo(target.value)}
        />
        <button onClick={saveInfo} > 
          Add
        </button>
      </div>
      <div>
        {todo.map((e) => (
          <div key={e.id}> value: {e.value} {e.mobile} </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
