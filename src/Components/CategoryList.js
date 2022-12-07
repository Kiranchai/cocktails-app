import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const List = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const handleClick = (categoryName) => {
    const urlCategoryName = categoryName
      .toLowerCase()
      .split(" ")
      .join("_")
      .split("/")
      .join("&");
    navigate(`/category/${urlCategoryName}`);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await (
        await fetch(
          "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
        )
      ).json();
      setCategories(data.drinks);
    };

    fetchCategories();
  }, []);

  if (categories.length === 0) {
    return <span>Loading...</span>;
  } else {
    return (
      <main className="home-main">
        {categories.map((category, idx) => {
          return (
            <div
              onClick={() => {
                handleClick(category.strCategory);
              }}
              className="category-container"
              key={idx}
            >
              <span className="category-name">{category.strCategory}</span>
            </div>
          );
        })}
      </main>
    );
  }
};

export default List;
