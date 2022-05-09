import { HOCProps } from "../constants";
import React, { useState } from "react";

const UpdatedComponent = (OriginalComponent: React.FC<HOCProps>): React.FC => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };
  return function () {
    return <OriginalComponent count={count} incrementCount={incrementCount} />;
  };
};

export default UpdatedComponent;
