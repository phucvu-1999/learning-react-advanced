import { HOCProps } from "../constants";
import React, { useState } from "react";

const UpdatedComponent = (OriginalComponent: React.FC<HOCProps>): React.FC => {
  function HOC() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
      setCount(count + 1);
    };

    return <OriginalComponent count={count} incrementCount={incrementCount} />;
  }

  return HOC;
};

export default UpdatedComponent;
