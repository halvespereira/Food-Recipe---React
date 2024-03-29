import React from "react";
import "./App.css";
import RecipeLookup from "./RecipeLookup";
import axios from "axios";
import Recipe from "./Recipes";
import WelcomePage from "./Loading";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: [],
    };
  }

  componentDidMount() {
    const localStorageRef = localStorage.getItem("recipes");
    if (localStorageRef) {
      this.setState({
        recipe: JSON.parse(localStorageRef),
      });
    }

    const favoriteRecipesFromStorage = JSON.parse(
      localStorage.getItem("favoriteRecipes")
    );

    if (!favoriteRecipesFromStorage) {
      localStorage.setItem("favoriteRecipes", JSON.stringify([]));
    }
  }

  componentDidUpdate() {
    localStorage.setItem("recipes", JSON.stringify(this.state.recipe));
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    e.persist();

    const API_ID = "a2e3b42b";
    const API_KEY = "1c745c5df6163f6999e524f014bf3890";
    const searchWord = e.currentTarget.input.value;
    const URL = `https://api.edamam.com/search?q=${searchWord}&app_id=${API_ID}&app_key=${API_KEY}&to=100`;

    e.target.submit.value = "Loading...";

    await axios.get(`${URL}`).then((response) =>
      this.setState({
        recipe: response.data.hits,
      })
    );

    e.target.submit.value = "Search";
  };

  recipeItem = (item) => {
    return <Recipe key={Math.random() * 5000000} recipes={item} />;
  };

  render() {
    return (
      <div className="App">
        <RecipeLookup titleText="Foodie App" handleSubmit={this.handleSubmit} />
        <div className="recipes-div">
          {this.state.recipe.length
            ? this.state.recipe.map(this.recipeItem)
            : null}
        </div>
        <div className="welcome-page">
          <WelcomePage />
        </div>
      </div>
    );
  }
}

export default App;
