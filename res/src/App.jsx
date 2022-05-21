import "./App.css";
import {useState} from "react"
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Restraunts from "./components/Restraunts";
import Filters from "./components/Filters";
import userinfo from "./Data/nav.json" 
import Offer from "./Data/offers.json"; 
import Restraunt from "./Data/restaurantdata.json";

const filters = {
  1: "Cost High to Lost",
  2: "Cost Lost to High",
  3: "Ratings",
  4: "Delivery Time",
  5: "Relevance",  
}

function App() {  
  const [sort , setsort] = useState("")
  const [data , setdata]= useState(Restraunt)  

  const update = (newfilter) =>{
    switch(newfilter){
      case "1":{
        setsort(1)
        data.sort((a,b)=> b.costfortwo - a.costfortwo)  
        setdata([...data]);   
        break ;
      }
      case "2":{
        setsort(2)
        data.sort((a,b)=> a.costfortwo - b.costfortwo)  
        setdata([...data]);  
        break ;
      }
      case "3":{
        setsort(3)
        data.sort((a,b)=> b.rating - a.rating)  
        setdata([...data]);  
        break ;
      }
      case "4":{
        setsort(4)
        data.sort((a,b)=> a.deliveryTimings - b.deliveryTimings)  
        setdata([...data]);  
        break ;
      }
      default: { 
        setdata(Restraunt)
        break;
      }
    }
  }; 

  return (
    <div>
      <Navbar {...userinfo.location} /> 
      <Offers Offer={Offer} />
      <section className="near-you">
        <Filters filters={filters} sort={sort} update={update} />
        <Restraunts data={data} />
      </section>
    </div>
  );
}

export default App;
