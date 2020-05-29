import React from "react";
import { useLocation } from "react-router-dom";
import RecipeDetailsHeader from "./RecipeDetailsHeader";
import RecipeDetailsLeft from "./RecipeDetailsLeft";
import RecipeDetailsRight from "./RecipeDetailsRight";
import RecipeDetailsDirectionLink from "./RecipeDetailsDirectionLink";

const RecipeDetails = () => {
  const location = useLocation();
  const recipe = location.state;
  const nutrients = Object.entries(recipe.totalNutrients);
  return (
    <>
      <RecipeDetailsHeader recipe={recipe} />
      <div className="recipeDetailDiv">
        <RecipeDetailsLeft recipe={recipe} />
        <RecipeDetailsRight recipe={recipe} nutrients={nutrients} />
        <RecipeDetailsDirectionLink recipe={recipe} />
      </div>
    </>
  );
};

export default RecipeDetails;
