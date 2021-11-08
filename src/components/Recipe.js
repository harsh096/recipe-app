import React from "react";

const Recipe = ({ title, calories, img, ingredients,url, weight }) => {
    
    const roundedOffCalories = Math.ceil(calories)
    const roundedOffWeight = Math.ceil(weight)

  return (
    <div className="recipe-container">
      <h1 className="recipe-title">{title}</h1>
      <img
        
        className="recipe-img"
        src={img}
        alt="img"
      />
      <div className="calorie-weight-div">
        <p>Calories: {roundedOffCalories}</p>
        <p>Weight: {roundedOffWeight} gms</p>
      </div>
      <p style={{ fontWeight: "500", margin: "0px" }}>Ingredients</p>

      <div className="recipe-li">
        {ingredients.map((i) => {
          return <li>{i}</li>;
        })}
      </div>
      <a href={url}>Recipe Website</a>
      
    </div>
  );
};

export default Recipe;
