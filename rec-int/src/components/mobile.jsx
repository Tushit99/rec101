import React from 'react'

function Mobile() {  
    let mob=[
        {name:"Android"},  
        {name:"Blackberry"},  
        {name:"iPhone"},  
        {name:"Windows Phone"}  
    ]
  return (
    <div>
        <h2> Mobile Operating System </h2>
        <ul>  
        {mob.map((a)=>(
            <li> {a.name} </li>
        ))}
        </ul>
        <h2> Mobile Manufacturers </h2>  
        <ul>
            <li type="square">Samsung</li> 
            <li type="square">HTC</li>  
            <li>Micromax</li>  
            <li type="circle">Apple</li>
        </ul>
    </div>
  )
}

export default Mobile;  