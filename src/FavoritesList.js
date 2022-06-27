import React, { useEffect, useState } from "react";
import Recipe from "./Recipes";
import RecipeLookup from "./RecipeLookup";

function FavoritesList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const favoritesList = JSON.parse(localStorage.getItem("favoriteRecipes"));

    if (favoritesList && favoritesList.length > 0) {
      setRecipes(favoritesList);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const recipeItem = (item) => {
    return (
      <Recipe key={Math.random() * 5000000} recipes={item} favorites={true} />
    );
  };

  return (
    <div className="App">
      <RecipeLookup titleText="Foodie App - Favorites" favorites={true} />

      <div className="recipes-div">
        {recipes.length ? recipes.map(recipeItem) : null}
      </div>
    </div>
  );
}

export default FavoritesList;
