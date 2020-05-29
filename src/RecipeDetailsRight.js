import React from "react";
import NutrientItem from "./NutrientItem";

const RecipeDetailsRight = (props) => {
  return (
    <div className="right-details">
      <h2>Nutrition Facts</h2>
      <ul>
        {props.nutrients.map((nutrient, idx) => {
          return <NutrientItem key={idx} name={nutrient} />;
        })}
      </ul>
    </div>
  );
};

export default RecipeDetailsRight;
