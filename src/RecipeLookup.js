import React from "react";
import { MdFavorite } from "react-icons/md";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

const RecipeLookup = (props) => (
  <>
    <div className="title">
      <h1>{props.titleText}</h1>
      {!props.favorites ? (
        <Link
          className="favoriteIcon"
          to={{
            pathname: "/favorites",
          }}
        >
          <div>favorites</div>
          <MdFavorite size={30} />
        </Link>
      ) : null}
      {props.favorites ? (
        <Link className="favoriteIcon" to={{ pathname: "/" }}>
          <AiFillHome color="blueviolet" size={30} />
        </Link>
      ) : null}
    </div>
    {!props.favorites ? (
      <form onSubmit={props.handleSubmit} className="lookUp" autoComplete="off">
        <input id="input" type="text" name="input" placeholder="Type here" />
        <input type="submit" name="submit" value="Search" />
      </form>
    ) : null}
  </>
);
export default RecipeLookup;
