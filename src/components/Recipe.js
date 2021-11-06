import React from "react";

const Recipe = ({ title, calories, img, ingredients }) => {
  return (
    <div>
      <h1>{title}</h1>
      <img src={img} alt="img" />
      <p>{calories}</p>
      <ul>Ingredients</ul>
      {ingredients.map((i) => {
        return <li>{i}</li>;
      })}
    </div>
  );
};

export default Recipe;
