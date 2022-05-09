import moment from "moment";
import React from "react";
import logo from "./logo.svg";
import HoverCounter from "./Components/HoverCounter";
import "./App.css";

function App() {
  const dateNow = moment().format("YYYY/MM/DD");

  return (
    <div className="App">
      <HoverCounter />
    </div>
  );
}

export default App;
