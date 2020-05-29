import React from "react";

const NutrientItem = (props) => {
  const quantity = Math.floor(props.name[1].quantity);

  return (
    <li>
      {props.name[1].label}: {" " + quantity + " "} {props.name[1].unit}
    </li>
  );
};

export default NutrientItem;
