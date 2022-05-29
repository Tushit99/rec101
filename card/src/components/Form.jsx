import React from "react";

const Form = () => {
  return (
    <div className="payment">
      <h2> Payment detail </h2>
      <div>
        <ul>
          <li className="form go">
            <input type="text" placeholder=" " className="email" />
            <label htmlFor="name"> CARDHOLDER NAME </label>
          </li>
          <li className="form go">
            <input type="text" placeholder=" " className="email" />
            <label htmlFor="name"> CARD NUMBER </label>
          </li>
          <li className="form2 go" >
            <div className="fo">
              <input type="date" placeholder=" " className="inp" />
              <label htmlFor=""> EXPIRY MONTH </label>
            </div>
            <div className="fo" >
              <input type="year" placeholder=" " className="inp" />
              <label htmlFor=""> EXPIRY YEAR </label>
            </div>
            <div className="fo" >
              <input type="text" placeholder=" " className="inp" />
              <label htmlFor=""> CVC </label>
            </div>
          </li>
        </ul>
      </div>
      <h4> Payment amount: 12 300 </h4> 
      <br />
      <button> Pay </button>
    </div>
  );
};

export default Form;

{
  /* <form>
  <input type="text" placeholder=" " className="email" />
  <label htmlFor="name"> Name </label>
  <input type="text" placeholder=" " className="email" />
  <label htmlFor="card"> Card </label>
</form> */
}
