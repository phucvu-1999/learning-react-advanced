import React, { useState } from "react";
import { ChildComponent } from "../shared/ChildComponent";

interface Props {
  Component: React.FC<ChildComponent>;
  initCount: number;
}

const HigherOrderComponent = (props: Props) => {
  const { Component, initCount } = props;

  const [count, setCount] = useState(initCount);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return function () {
    return (
      <div>
        <Component
          count={count}
          incrementCount={incrementCount}
          key={Math.random().toString()}
        />
      </div>
    );
  };
};

export default HigherOrderComponent;
