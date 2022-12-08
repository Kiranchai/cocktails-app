import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import "./Drink.css";

const Drink = () => {
  const { drinkId } = useParams();
  const [drinkData, setDrinkData] = useState([]);
  const ingredients = [];
  const measure = [];
  const recipeItems = [];

  useEffect(() => {
    const fetchDrinkData = async () => {
      const data = await (
        await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
        )
      ).json();

      setDrinkData(data.drinks[0]);
    };

    fetchDrinkData();
  }, [drinkId]);

  if (drinkData.length === 0) {
    return <div>Loading...</div>;
  } else {
    const entries = Object.entries(drinkData);
    entries.forEach((entry) => {
      const [key, value] = entry;

      if (key.includes("strIngredient") && value !== null) {
        ingredients.push(value);
      }
      if (key.includes("strMeasure") && value !== null) {
        measure.push(value);
      }
    });

    ingredients.forEach((ingredient, idx) => {
      recipeItems.push({ ingredient: ingredient, measure: measure[idx] });
    });

    return (
      <section className="drink-section">
        <NavLink className="navlink" to="/">
          <h1 className="drink-section-header">Cocktailer</h1>
        </NavLink>
        <section className="drink-content">
          <div className="drink-details">
            <div className="thumbnail-wrapper">
              <img
                className="thumbnail"
                src={drinkData.strDrinkThumb}
                alt="drink thumbnail"
              />
            </div>
            <div className="drink-desc">
              <h2 className="drink-name">{drinkData.strDrink}</h2>
              <div className="ingredients-container">
                <h3>Ingredients: </h3>
                {recipeItems.map((item) => {
                  return (
                    <div className="ingredients-item">
                      <span>{item.ingredient}</span>
                      <span className="ingredient-measure">{item.measure}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="misc-desc">
            <span>
              Is alcoholic:{" "}
              {drinkData.strAlcoholic === "Alcoholic" ? "Yes" : "No"}
            </span>
            <span>Preferred glass: {drinkData.strGlass}</span>
          </div>

          <span className="instruction">{drinkData.strInstructions}</span>
        </section>
      </section>
    );
  }
};

export default Drink;
