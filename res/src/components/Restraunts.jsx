import React from "react";

const Restraunts = (props) => {
  return (
    <div className="container divider">
      <div className="cards">
        {/* ============ */}
        {props.data.map((e) => (
          <div key={e.id} className="card">
            <img width="254" height="160px" src={e.image} />
            <div className="restaurant-details">
              <div className="restaurant-title"> {e.name} </div>
              <div className="restaurant-subtitle"> {e.category} </div>
            </div>
            <div className="restaurant-info">
              <div className="restaurant-ratings">
                <i className="material-icons star-icon">star</i> {e.rating}
              </div>
              .
              <div className="restaurant-delivery-timings">  
                {e.deliveryTimings} MINS  
              </div>
              .
              <div className="restaurant-cost-for-two">
                ₹{e.costfortwo} FOR TWO
              </div>
            </div>
            <div className="offer-banner">
              <span className="material-icons"> local_offer </span>
              <span className="offer-text"> {e.offer} </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restraunts;
