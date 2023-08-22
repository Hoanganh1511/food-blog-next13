"use client";

import { useState } from "react";

const StarRating = ({}) => {
  const [rating, setRating] = useState(0);
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, idx) => {
        idx += 1;
        return (
          <button
            key={idx}
            type="button"
            className={idx < rating ? "on" : "off"}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};
export default StarRating;
