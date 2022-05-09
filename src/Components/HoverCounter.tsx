import { useState } from "react";
import UpdatedComponent from "../HOC/withCounter";
import { HOCProps } from "../constants";
import React from "react";

const HoverCounter = (props: HOCProps) => {
  return (
    <div>
      <h2 onMouseEnter={props.incrementCount}>Hover {props.count} times</h2>
    </div>
  );
};

export default UpdatedComponent(HoverCounter);
