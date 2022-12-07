import React from "react";
import List from "../CategoryList";
import "./Home.css";

const Home = () => {
  return (
    <section className="home-section">
      <h1 className="home-header">Cocktailer</h1>
      <h2>Select category</h2>
      <List />
    </section>
  );
};

export default Home;
