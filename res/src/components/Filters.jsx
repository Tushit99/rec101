import React from "react";

const Filters = ({ filters, sort, update }) => {
  return (
    <div className="container restaurants">
      <h1>50 restaurants</h1>
      <div className="restaurant-options">
        {Object.entries(filters).map(([key,value]) => (
          <div 
          key={key} 
          className="restaurant-option" 
          onClick={()=> update(key)} 
          >   
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filters;
