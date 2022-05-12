import React from "react";

interface Props {
  count?: number;
}

const Content = ({ count }: Props) => {
  console.log("Child component re-render !");
  return <div>Hello {count}</div>;
};

export default React.memo(Content);
