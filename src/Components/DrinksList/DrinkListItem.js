import React from "react";
import { useNavigate } from "react-router-dom";

const DrinkListItem = (props) => {
  const { drinkId, drinkThumbnail, drinkName } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/drink/${drinkId}`);
  };

  return (
    <div onClick={handleClick} className="drink-item-container">
      <div className="drink-image-container">
        <img
          className="drink-image"
          src={drinkThumbnail}
          alt="drink thumbnail"
        />
      </div>

      <span className="drink-name-span">{drinkName}</span>
    </div>
  );
};

export default DrinkListItem;
