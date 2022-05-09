import React, { useState, useEffect } from "react";

const ClickCounter = () => {
  const [count, setCount] = useState(0);

  const onClickHandler = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={onClickHandler}>Click {count} times</button>
    </div>
  );
};

export default ClickCounter;
