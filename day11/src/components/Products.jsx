import React from 'react'
import {useEffect, useState} from "react"
import {Link} from 'react-router-dom';

const Products = () => {
    const [products, setproducts] = useState([]); 

    useEffect(()=>{
        const fetchproducts = async ()=>{
            let r = await fetch("http://localhost:8080/products");
            let d = await r.json(); 
            setproducts(d); 
        };
        fetchproducts(); 
    },[]); 
  return ( 
    <div>Products 
        {products.map((d)=>(
            <div key={d.id} className="power">  
               Name: <Link to={`/products/${d.id}`}> {d.name} </Link> 
               <br />
               Price: <Link to={`/products/${d.id}`}> {d.price} </Link>
             </div> 
        ))}   
    </div>
  )
}

export default Products    







