import React from "react";
import { useEffect, useState } from "react";  
import { AiOutlineArrowRight } from 'react-icons/ai';


const Card = () => {
  const [card, setcard] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await fetch("http://localhost:8080/data").then((d) =>
        d.json()
      );
      setcard(data);
      console.log(data);
    }
    getData();
  }, []);

  return (
    <>
      {card.map((e) => (
        <div className="container" style={{ backgroundColor: e.color }}>
          <div className="main">
            <div>
              <h3> {e.date} </h3>
              <button> Case Study </button>
              <h1> {e.heading} </h1>
              <h1> {e.subheading} </h1>
            </div>
            <img src={e.logo} className="logo" />
          </div>   
          <div className="main2">
            <h3> {e.devices} </h3> 
            <h2> <AiOutlineArrowRight/> </h2>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
