import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div>
        <div>
          <h2> Footer </h2>
          <p> 
            Here you can use row and columns to
            <br />
            organize you footer content. Lorem
            <br />
            ipsum dolor sit amet, consectur
            <br />
            adipisicing elit.
          </p>
        </div>
        <div>
          <h2> LINKS </h2>
          <p>
            <Link> Male </Link>
            <br />
            <Link> Female </Link>
            <br />
            <Link> Boy </Link>
            <br />
            <Link> Girl </Link>
          </p>
        </div>
        <div>
          <h2> LINKS </h2>
          <p>
            <Link> Male </Link>
            <br />
            <Link> Female </Link>
            <br />
            <Link> Boy </Link>
            <br />
            <Link> Girl </Link>
          </p>
        </div>
      </div>
      <h2> Register for free </h2>
      <div></div>
    </div>
  );
};

export default Footer;
