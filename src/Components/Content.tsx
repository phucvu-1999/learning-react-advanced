import React from "react";

interface Props {
  increase: () => void;
}

const Content = ({ increase }: Props) => {
  console.log("Component re-render !!!");
  return (
    <div>
      <button onClick={increase}>Increase</button>
    </div>
  );
};

export default React.memo(Content);
