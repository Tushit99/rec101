import React from "react";  
import { BiHomeAlt } from 'react-icons/bi';   
import {FiTrendingUp} from "react-icons/fi";  
import {MdOutlineExplore} from "react-icons/md";   
import {AiOutlineStar} from "react-icons/ai";        
import {FiSettings} from "react-icons/fi";  

const Navbar = () => {
  return (
    <div className="Nav">
      <h2> Logo </h2>
      <ul>
        <li>
          <BiHomeAlt size={20} /> 
          <button> Home </button>
        </li>
        <li>
          <FiTrendingUp size={20} />
          <button> Trending </button>
        </li>  
        <li>
          <MdOutlineExplore size={20} />
          <button> Explore </button>
        </li>
        <li>
          <AiOutlineStar size={20} /> 
          <button> Favourites </button>
        </li>
        <li>
          <FiSettings size={20} /> 
          <button> Settings </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
