import React from "react";
import HealthLabel from "./HealthLabel";
import IngredientItem from "./IngredientItem";

const RecipeDetailsLeft = (props) => {
  const recipe = props.recipe;
  return (
    <div className="left-details">
      <img src={recipe.image} alt={recipe.label} />
      <div className="healthLabels">
        {recipe.healthLabels.map((label) => {
          return <HealthLabel key={label} name={label} />;
        })}
      </div>
      <div className="ingredients">
        <h2>Ingredients</h2>
        <ul>
          {recipe.ingredients.map((item, idx) => {
            return <IngredientItem key={idx} item={item} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default RecipeDetailsLeft;
