import React, { useState, useCallback } from "react";
import Content from "./Components/Content";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div className="App">
      <Content increase={increaseCount} />
      <p>{count}</p>
    </div>
  );
}

export default App;
