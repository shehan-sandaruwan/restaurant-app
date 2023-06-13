import React from "react";
import "./dishitem.css";
import { formatCurrency } from "Utils/helper-util";

const DishCard = ({ imagePath, name, description, price }) => {
  return (
    <div className="card-wrapper">
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <label>{formatCurrency(price)}</label>
      </div>
      <figure>
        <img src={imagePath} alt="dish item" />
      </figure>
    </div>
  );
};

export default DishCard;
