import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="m-0">
        <input
          type="button"
          value="X"
          className="m-0.5 w-16 p-5 bg-white"
        ></input>
        <input
          type="button"
          value="X"
          className="m-0.5 p-5 w-16 bg-white"
        ></input>
        <input
          type="button"
          value="X"
          className="m-0.5 p-5 w-16 bg-white"
        ></input>
      </div>
      <div className="m-0">
        <input
          type="button"
          value="X"
          className="m-0.5 p-5 w-16 bg-white"
        ></input>
        <input
          type="button"
          value="X"
          className="m-0.5 p-5 w-16 bg-white"
        ></input>
        <input
          type="button"
          value="X"
          className="m-0.5 p-5 w-16 bg-white"
        ></input>
      </div>
      <div>
        <input
          type="button"
          value="X"
          className="m-0.5 p-5 w-16 bg-white"
        ></input>
        <input
          type="button"
          value="X"
          className="m-0.5 p-5 w-16 bg-white"
        ></input>
        <input
          type="button"
          value="X"
          className="m-0.5 p-5 w-16 bg-white"
        ></input>
      </div>
    </>
  );
}

export default App;
