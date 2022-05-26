import React, { useRef } from "react";
import { useState } from "react";

const Watch = () => {
  // const [timeid,settimeid] = useState();
  // const [watch, setwatch] = useState(0);

  const timerid = useRef(null);
  const [watch, setwatch] = useState(0);

  const start = () => {
    if (!timerid.current) {
      let id = setInterval(() => {
        setwatch((prev) => prev + 1);
      }, 100);
      timerid.current = id;
    }
  };
  const pause = () => {
    clearInterval(timerid.current);
    timerid.current = null;
  };
  const reset = () => {
    clearInterval(timerid.current);
    setwatch(0);
    timerid.current = null;
  };

  return (
    <div>
      <h2> Stop watch </h2>
      <h1> {watch} </h1>
      <div className="but">
        <button onClick={start}> Start </button>
        <button onClick={pause}> Pause </button>
        <button onClick={reset}> Reset </button>
      </div>
    </div>
  );
};

export default Watch;
