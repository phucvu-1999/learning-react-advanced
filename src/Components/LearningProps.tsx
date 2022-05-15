import React from "react";

interface Props {
  children: (item: string) => JSX.Element;
  cars: string[];
}

const LearningProps = ({ cars, children }: Props) => {
  console.log("Hello !!");
  return <ul>{cars.map((car) => children(car))}</ul>;
};

export default LearningProps;
