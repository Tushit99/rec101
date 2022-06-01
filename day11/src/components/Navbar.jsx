import React from "react"; 
import { Link } from "react-router-dom"; 

const Navbar = () => {  
  return (  
    <div className="link">     
      <Link to="/">Home</Link>    
      <Link to="/about">About</Link>   
      <Link to="/products"> Products</Link>    
    </div>    
  );   
};     

export default Navbar;    








