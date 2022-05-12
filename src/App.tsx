import React from "react";
import LearningProps from "./Components/LearningProps";

import "./App.css";

function App() {
  const shoes = ["Jordan 1", "Jordan 11", "Air Max 1"];
  return (
    <div className="App">
      <LearningProps cars={shoes}>
        {(item: string) => <li key={item}>{item}</li>}
      </LearningProps>
    </div>
  );
}

export default App;
