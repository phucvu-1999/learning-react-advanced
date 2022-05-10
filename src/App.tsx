import moment from "moment";
import React from "react";
import logo from "./logo.svg";
import HoverCounter from "./Components/HoverCounter";
import ClickCounter from "./Components/ClickCounter";
import LowPerformance from "./Components/LowPerformance";
import "./App.css";

function App() {
  const dateNow = moment().format("YYYY/MM/DD");

  return (
    <div className="App">
      {/* <HoverCounter />
      <ClickCounter /> */}
      Hello
      <LowPerformance />
    </div>
  );
}

export default App;
