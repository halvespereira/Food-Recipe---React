import React from "react";

const RecipeLookup = (props) => (
  <>
    <h1 className="title">{props.titleText}</h1>
    <form onSubmit={props.handleSubmit} className="lookUp" autoComplete="off">
      <input id="input" type="text" name="input" placeholder="Type here" />
      <input type="submit" name="submit" value="Search" />
    </form>
  </>
);
export default RecipeLookup;
