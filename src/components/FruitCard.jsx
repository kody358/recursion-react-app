import React from "react";
import "./FruitCard.css";

const FruitCard = ({ name, calorie, macro, image }) => {
  return (
    <div className="fruit-card">
      <div className="fruit-image">
        <img src={image} alt={name} />
      </div>
      <div className="fruit-info">
        <h2>{name}</h2>
        <div className="calorie-info">
          <span>カロリー: {calorie}kcal</span>
        </div>
        <div className="macro-info">
          <div className="macro-item">
            <span>炭水化物: {macro.p}g</span>
          </div>
          <div className="macro-item">
            <span>脂質: {macro.f}g</span>
          </div>
          <div className="macro-item">
            <span>タンパク質: {macro.c}g</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FruitCard;