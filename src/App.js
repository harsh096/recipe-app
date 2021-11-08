import "./App.css";
import { useState, useEffect } from "react";
import Recipe from "./components/Recipe";
const dotenv = require("dotenv");
dotenv.config();

function App() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("banana");
  const [recipes, setRecipes] = useState([]);

  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`;

  const getRecipe = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.hits);
      setRecipes(data.hits);
     
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  useEffect(() => {
    getRecipe();
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
    // console.log(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    // console.log(search)
  };

  return (
    <div className="App">
      <div className="wrapper">
        <h3 className="heading">Enter any ingredient</h3>
        <form onSubmit={getSearch} className="search-form" action="">
          <input
            className="search-input"
            type="text"
            value={search}
            onChange={updateSearch}
            placeholder="banana"
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="recipe-wrapper">
        {recipes.map((recipe) => {
          return (
            <Recipe
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              img={recipe.recipe.image}
              ingredients={recipe.recipe.ingredientLines}
              url={recipe.recipe.url}
              weight={recipe.recipe.totalWeight}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
