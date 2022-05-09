import React, { useState } from "react";
import { HOCProps } from "../constants";
import UpdatedComponent from "../HOC/withCounter";

const ClickCounter = (props: HOCProps) => {
  return (
    <div>
      <button onClick={props.incrementCount}>Click {props.count} times</button>
    </div>
  );
};

export default UpdatedComponent(ClickCounter);
