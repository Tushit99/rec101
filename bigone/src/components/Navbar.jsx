import React from "react" 
import { Link } from 'react-router-dom' 
import { MdLightMode } from 'react-icons/md';
import {MdDarkMode} from "react-icons/md"


const Navbar = ({setColor, color}) => {

  const change = ()=>{
    setColor(!color); 
  }

  return (
    <div className={color ? "head": "head2"}> 
       <img src="https://img.freepik.com/free-vector/aa-letter-monogram-bold-company-name-logo_609138-89.jpg?w=996" className="imglogo" alt="" />
        <Link className={color ? "nav1" : "nav2"} to="/" > Home </Link>  
        <Link  className={color ? "nav1" : "nav2"} to="/male" > Male </Link>
        <Link  className={color ? "nav1" : "nav2"} to="/female" > Female </Link>    
        <Link  className={color ? "nav1" : "nav2"} to="/boy" > Boy </Link>    
        <Link  className={color ? "nav1" : "nav2"} to="/Child" > Child </Link>    
        <Link  className={color ? "nav1" : "nav2"} to="/girl" > Girl </Link>      
        <Link  className={color ? "nav1" : "nav2"} to="/users" > Users </Link>      
        <Link  className={color ? "nav1" : "nav2"} to="/login" > Login </Link>   
        <div className="colorchange">
        <button onClick={change}> {color ? <MdLightMode /> : <MdDarkMode />  }</button>     
        </div>
    </div> 
  )    
}   

export default Navbar    






     