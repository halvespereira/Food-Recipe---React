import React from "react";

const RecipeDetailsDirectionLink = (props) => {
  return (
    <p id="directions-link">
      Click{" "}
      <a href={props.recipe.url} alt="Cooking Directions">
        <strong>here </strong>
      </a>
      for cooking instructions!
    </p>
  );
};

export default RecipeDetailsDirectionLink;
