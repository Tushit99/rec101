import Form from "./components/Form";
import "./App.css";
import Data from "./components/Data";

function App() {
  return (
    <div className="container">
      <div className="App">
        <img
          src="https://imgk.timesnownews.com/story/1569653930-Credit_Card.jpg"
          className="cardimg"
          alt="img"
        />
        <Form />
      </div>
      {/* <div>
        <Data />
      </div> */}
    </div>
  );
}

export default App;
