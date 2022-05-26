import Watch from "./components/Watch";
import "./App.css";

function App() {
  return (
    <div className="main">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfLMoi_9OhNY3E_qJrloadsWu2Q7-TCM8T1Q&usqp=CAU"
        alt=""
      />
      <div className="display">
        <div>
          <div className="App">
            <Watch />
          </div>
          <div className="box">
            <p>
              A stopwatch is a timepiece designed to measure the amount of time
              that elapses between its activation and deactivation.
            </p>
          </div>
        </div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnjV003BSJrSIz5cg826DMr13Tnf4w51qb6g&usqp=CAU" className="imag" alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
