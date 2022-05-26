import React from 'react'
import {useState} from "react"; 

const Watch = () => {
    // const [timeid,settimeid] = useState();
    // const [watch, setwatch] = useState(0);  

    const timerid = useRef()


    const start = ()=>{
        if(!timeid){
            let id = setInterval(()=>{
                setwatch((prev)=>prev +1)
            },100); 
            (id);  
        }
    };  
    const pause =()=>{
        clearInterval(timeid); 
        settimeid(null) 
    }; 
    const reset =()=>{
        clearInterval(timeid); 
        setwatch(0); 
    }

  return (
    <div>
        <h2> Stopwatch </h2> 
        <h1> {watch} </h1>
        <button onClick={start}> Start </button>
        <button onClick={pause}> Pause </button>
        <button onClick={reset}> Reset </button>
    </div>
  )
}

export default Watch