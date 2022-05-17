import React,{useState} from 'react'; 

function Count() {  
    const [count, setCount]= useState(0);  

  return (
    <div>
        <h1>count: {count} </h1> 
        <button onClick={()=>{if(count<10){setCount(count + 1)}}}> increase </button> 
        <button onClick={()=>{if(count>0){setCount(count - 1)}}}> decrease </button> 
        <button onDoubleClick={()=>{if(count<200){setCount(count * 2)}}}> double </button>
    </div> 
  )
}

export default Count;  
