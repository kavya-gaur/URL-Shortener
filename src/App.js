import "./App.css";
import InputShortner from "./InputShortner";
import Backgroundanimation from "./Backgroundanimation";
import Linkresult from "./Linkresult";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
      <InputShortner setInputValue={setInputValue} />
      <Backgroundanimation />
      <Linkresult inputValue={inputValue} />
    </div>
  );
}

export default App;
