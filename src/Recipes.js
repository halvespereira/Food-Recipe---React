import React from "react";
import { Link } from "react-router-dom";

export default function Recipe(props) {
  const recipe = props.favorites ? props.recipes : props.recipes.recipe;
  return (
    <div className="individual-recipe-div">
      <h3 className="recipe-title">{recipe.label}</h3>
      <img src={recipe.image} alt={recipe.label} />
      <p>
        <strong>Calories: </strong>
        {Math.floor(recipe.calories)}
      </p>

      <Link
        to={{
          pathname: `/recipe/${recipe}`,
          state: recipe,
        }}
      >
        <button id="detailButton">More Info </button>
      </Link>
    </div>
  );
}
