import React, { useState } from "react";
import RecipeDetailsHeader from "./RecipeDetailsHeader";
import RecipeDetailsLeft from "./RecipeDetailsLeft";
import RecipeDetailsRight from "./RecipeDetailsRight";
import RecipeDetailsDirectionLink from "./RecipeDetailsDirectionLink";
import axios from "axios";

const API_ID = "a2e3b42b";
const API_KEY = "1c745c5df6163f6999e524f014bf3890";

const RecipeDetails = ({ match }) => {
  const [recipe, setRecipe] = useState(null)
  const recipeUri = match.params.uri;
  const URL = `https://api.edamam.com/search?r=${recipeUri}&app_id=${API_ID}&app_key=${API_KEY}`;

  axios.get(`${URL}`).then((response) =>
    setRecipe(response.data[0])
  );

  if (!recipe) {
    return <div>Loading...</div>
  }

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
