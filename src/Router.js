import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import RecipeDetails from "./RecipeDetails";
import NotFound from "./NotFound";
import FavoritesList from "./FavoritesList";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/recipe/:name" component={RecipeDetails} />
      <Route path="/favorites" component={FavoritesList} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
