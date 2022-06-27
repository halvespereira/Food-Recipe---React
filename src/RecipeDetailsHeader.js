import React, { useState, useEffect } from "react";
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

const RecipeDetailsHeader = (props) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favoriteRecipesFromStorage = JSON.parse(
      localStorage.getItem("favoriteRecipes")
    );

    const currentRecipe = favoriteRecipesFromStorage.find(
      (r) =>
        r.calories === recipe.calories &&
        r.label === recipe.label &&
        r.url === recipe.url
    );

    if (currentRecipe) {
      setIsFavorite(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const recipe = props.recipe;

  const favoriteRecipesFromStorage = JSON.parse(
    localStorage.getItem("favoriteRecipes")
  );

  function removeFromFavorite() {
    const recipeToBeRemoved = favoriteRecipesFromStorage.find(
      (r) =>
        r.calories === recipe.calories &&
        r.label === recipe.label &&
        r.url === recipe.url
    );

    if (recipeToBeRemoved) {
      const newFavoritesList = favoriteRecipesFromStorage.filter(
        (r) =>
          r.calories !== recipe.calories &&
          r.label !== recipe.label &&
          r.url !== recipe.url
      );
      localStorage.setItem("favoriteRecipes", JSON.stringify(newFavoritesList));
      setIsFavorite(false);
    }
  }

  function addToFavorite() {
    let favoriteRecipes = [];

    if (favoriteRecipesFromStorage && favoriteRecipesFromStorage.length > 0) {
      favoriteRecipes = favoriteRecipesFromStorage;
    }
    const newFavoritesList = [...favoriteRecipes, recipe];
    localStorage.setItem("favoriteRecipes", JSON.stringify(newFavoritesList));
    setIsFavorite(true);
  }

  console.log(recipe);

  return (
    <div className="recipeDetailsHeader" style={{ display: "flex" }}>
      <h2 style={{ padding: "10px 0" }} className="title">
        {recipe.label + " "}
        <small>
          {recipe.totalTime !== 0 ? "- " + recipe.totalTime + " min" : null}
          <i className="far fa-clock"></i>
        </small>
      </h2>
      <div className="favoriteAddRemove">
        <Link to={{ pathname: "/" }}>
          <AiFillHome color="blueviolet" size={30} />
        </Link>
        {isFavorite ? (
          <MdFavorite
            size={30}
            color="blueviolet"
            onClick={removeFromFavorite}
          />
        ) : (
          <MdOutlineFavoriteBorder
            size={30}
            color="blueviolet"
            onClick={addToFavorite}
          />
        )}
      </div>
    </div>
  );
};

export default RecipeDetailsHeader;
