import React from "react";
import { Link } from "react-router-dom";

export default function Recipe(props) {
  const recipe = props.recipes.recipe;
  return (
    <div className="individual-recipe-div">
      <h3 className="recipe-title">{recipe.label}</h3>
      <img src={recipe.image} alt={recipe.label} />
      <p>
        <strong>Calories: </strong>
        {Math.floor(recipe.calories)}
      </p>

      <button id="detailButton">
        <Link
          to={{
            pathname: `/recipe/${encodeURIComponent(recipe.uri)}`,
          }}
        >
          More Info{" "}
        </Link>
      </button>
    </div>
  );
}
