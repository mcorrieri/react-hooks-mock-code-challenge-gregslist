import React, { useState } from "react";

function ListingCard({ listing }) {
  const { image, description, location } = listing;
  const [favorite, setIsFavorite] = useState(false);

  function handleFavoriteToggle() {
    setIsFavorite(!favorite);
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button
            onClick={handleFavoriteToggle}
            className="emoji-button favorite active"
          >
            ★
          </button>
        ) : (
          <button
            onClick={handleFavoriteToggle}
            className="emoji-button favorite"
          >
            ☆
          </button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
