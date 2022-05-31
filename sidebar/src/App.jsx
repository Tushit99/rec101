import Navbar from "./components/Navbar";
import "./App.css";
import { useState } from "react";

function App() {
  const [show, setshow] = useState(true);
  return (
    <div>
      <div className="dis">
        <div
          className={`${show ? "light" : "dark"}`}
          onClick={() => setshow(!show)}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <h3> Logo </h3>
      </div>
      <div className={`${show ? "box" : "case"}`}>
        <Navbar />
      </div>
    </div>
  );
}

export default App;
