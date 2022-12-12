import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import DrinkListItem from "./DrinkListItem";
import "./DrinkList.css";
import { CircularProgress } from "@mui/material";

const DrinksList = () => {
  const { categoryName } = useParams();
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    const fetchDrinks = async () => {
      const categoryNameFixed = categoryName.split("&").join("/");
      const data = await (
        await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoryNameFixed}`
        )
      ).json();
      setDrinks(data.drinks);
    };

    fetchDrinks();
  }, [categoryName]);

  return (
    <div className="drinks-list">
      <NavLink className="navlink" to="/">
        <h1>Cocktailer</h1>
      </NavLink>
      <h3>
        {categoryName
          .split("_")
          .map((element) => {
            return (
              element.charAt(0).toUpperCase() +
              element.slice(1).toLocaleLowerCase()
            );
          })
          .join(" ")}
      </h3>

      {drinks.length === 0 ? (
        <CircularProgress style={{ color: "white" }} />
      ) : (
        <div className="drinks-list-container">
          {drinks.map((drink) => {
            return (
              <DrinkListItem
                key={drink.idDrink}
                drinkId={drink.idDrink}
                drinkThumbnail={drink.strDrinkThumb}
                drinkName={drink.strDrink}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DrinksList;
