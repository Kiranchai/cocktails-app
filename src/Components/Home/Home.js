import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import List from "../CategoryList";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    const data = await (
      await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    ).json();
    const drinkId = data.drinks[0].idDrink;
    navigate(`/drink/${drinkId}`);
  };

  return (
    <section className="home-section">
      <h1 className="home-header">Cocktailer</h1>
      <button onClick={handleClick} className="random-btn">
        {isLoading ? (
          <CircularProgress style={{ color: "white" }} />
        ) : (
          "Show random cocktail"
        )}
      </button>
      <h2>Select category</h2>
      <List />
    </section>
  );
};

export default Home;
