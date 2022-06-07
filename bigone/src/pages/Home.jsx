import React from "react";
import animat from "./animat.mp4";

const Home = () => {
  return (
    <div>
      <h1 className="hom">Home</h1>
      <div className="home1">
        <h3>
           This list of the top clothing companies in the world also features
          famous clothing brands. What are the most successful clothing
          companies? There are popular name-brand American labels like
          Abercrombie & Fitch, Nike, and Ralph Lauren, along with newer upstarts
          CLE Clothing Co., aka Cleveland Clothing Company. International high
          fashion clothing line names such as Dolce & Gabbana, Gucci, and Prada
          are here, too.The lengthy list of major clothing companies includes the largest and
          most profitable clothes businesses, corporations, agencies, vendors
          and firms in the world.
          <br /> 
           If you're thinking of working in the clothing
          industry, a good place to start is with this clothing brands list.
          <br />
          <br />
          In general, you might want to ask yourself, "What are the biggest
          clothing companies in the world?" Another topic to consider is the
          rise of ethical clothing companies.Slow fashion brands like Stella
          McCartney and Patagonia are apparel industry companies that produce
          quality product, but also makes a positive impact and supports
          sustainability.
        </h3>
        <video autoPlay loop muted width="400px">
          <source src={animat} type="Video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Home;





