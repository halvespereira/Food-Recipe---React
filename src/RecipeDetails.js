import React, { useEffect } from "react";
import RecipeDetailsHeader from "./RecipeDetailsHeader";
import RecipeDetailsLeft from "./RecipeDetailsLeft";
import RecipeDetailsRight from "./RecipeDetailsRight";
import RecipeDetailsDirectionLink from "./RecipeDetailsDirectionLink";
import { useLocation } from "react-router-dom";

const RecipeDetails = () => {
  const location = useLocation();
  const recipe = location.state;

  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
