import moment from "moment";
import React from "react";
import logo from "./logo.svg";
import HoverCounter from "./Components/HoverCounter";
import ClickCounter from "./Components/ClickCounter";
import { Routes, Route, Link } from "react-router-dom";
import LinkRouter from "./Components/LinkRouter";
import "./App.css";

const LowPerformance = React.lazy(() => import("./Components/LowPerformance"));

function App() {
  const dateNow = moment().format("YYYY/MM/DD");

  return (
    <div className="App">
      {/* <HoverCounter />
      <ClickCounter /> */}
      Hello
      <React.Suspense fallback={<div>loading ...</div>}>
        <LowPerformance />
      </React.Suspense>
    </div>
  );
}

export default App;
