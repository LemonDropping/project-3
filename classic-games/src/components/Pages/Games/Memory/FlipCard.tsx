import React from "react";
import classnames from "classnames";
import "./FlipCard.scss";
import Houston from "./images/matchImages/Houston.png";

const Card = ({ onClick, card, index, isInactive, isFlipped, isDisabled }) => {
  const handleClick = () => {
    !isFlipped && !isDisabled && onClick(index);
  };

  return (
    <div
      className={classnames("card", {
        "is-flipped": isFlipped,
        "is-inactive": isInactive,
      })}
      onClick={handleClick}
    >
      <div className="card-face card-font-face">
        <img src={Houston} alt="Houston" />
      </div>
      <div className="card-face card-back-face">
        <img src={card.image} alt="HoustonSeal" />
      </div>
    </div>
  );
};

export default Card;
