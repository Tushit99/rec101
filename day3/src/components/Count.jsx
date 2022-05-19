import React,{useState} from 'react'; 

function Count() {  
    const [count, setCount]= useState(0);  

  return (
    <div>
        <h1>count: {count} </h1> 
        <button onClick={()=>{if(count<10){setCount(count + 1)}}}> increase </button> 
        <button onClick={()=>{if(count>0){setCount(count - 1)}}}> decrease </button> 
        <button onClick={()=>{setCount(count * 2)}}> double </button> 
        <h3> number will be between 0 to 10 </h3>
        <h3> multiplication is unlimited </h3>
    </div> 
  )
}

export default Count;  
