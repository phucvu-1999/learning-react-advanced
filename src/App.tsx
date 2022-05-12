import React, { useState, memo } from "react";
import Content from "./Components/Content";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <Content count={count} />
      <p>{count}</p>
      <button onClick={increaseCount}>Increase</button>
    </div>
  );
}

export default App;
