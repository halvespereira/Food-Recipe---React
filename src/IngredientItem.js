import React from "react";

const IngredientItem = (props) => {
  const grams = Math.floor(props.item.weight);

  return (
    <li>
      {props.item.text} - {grams} g
    </li>
  );
};

export default IngredientItem;
