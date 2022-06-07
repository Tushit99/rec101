import { useDispatch, useSelector } from 'react-redux' 
import  {add, substract,divide,multiply } from "./store/action"
import './App.css'
// import { useState } from 'react'   

const x = (abcd)=> abcd.pqr ; 
  
function App() {
  const dispatch = useDispatch() 
  // const [form, setForm] = useState({
  //   batch: "rct-101", 
  // })
 
  // const updateForm=()=>{
  //   form.name = "gaurav" ; 
  //   setForm({...from}); 
  // }    

  const count = useSelector((state)=> state.count)

  return (  
    <div className="App">
      <h1> Counter : {count} </h1> 
      <button onClick={()=> dispatch(add())}>+</button>
      <button onClick={()=> dispatch(substract())}>-</button>   
      <button onClick={()=> dispatch(divide())}>%</button>
      <button onClick={()=> dispatch(multiply())}>X</button>    
      </div>
  )
}

export default App   

