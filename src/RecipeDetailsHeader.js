import React from "react";

const RecipeDetailsHeader = (props) => {
  const recipe = props.recipe;
  return (
    <div className="recipeDetailsHeader" style={{ display: "flex" }}>
      <h2 className="title">
        {recipe.label + " "}
        <small>
          {recipe.totalTime !== 0 ? "- " + recipe.totalTime + " min" : null}
          <i className="far fa-clock"></i>
        </small>
      </h2>
    </div>
  );
};

export default RecipeDetailsHeader;
