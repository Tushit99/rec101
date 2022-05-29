import React from "react";
import {useState} from "react"
import data from "../../";

const Data = () => {
  const [todata, setdata] = useState(data);

  return (
    <div>
      {todata.map((d) => (
        <div>
          <h3> Name: {d.name} </h3>
          <h3> Card: {d.card} </h3>
          <h3> Month: {d.month} </h3>
          <h3> Year: {d.year} </h3>
          <h3> CVC: {d.cvc} </h3>
          <h3> Payment Amount: {d.paymentAmount} </h3>
        </div>
      ))}
    </div>
  );
};

export default Data;
