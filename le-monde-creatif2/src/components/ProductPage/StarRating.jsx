import React from "react";

function StarRating({ rating }) {
  const starRatingStyle = {
    display: "flex",
    gap: "10px",
  };

  const starStyle = {
    width: "18px",
    height: "18px",
  };

  return (
    <div
      style={starRatingStyle}
      aria-label={`Rating: ${rating} out of 5 stars`}
    >
      {[...Array(5)].map((_, index) => (
        <img
          key={index}
          src={
            index < rating
              ? "https://cdn.builder.io/api/v1/image/assets/TEMP/54d32f1c9e82816ccf420ba808a47784814dfa4dd9d774551f5aa6fca2ac08cf?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff"
              : "https://cdn.builder.io/api/v1/image/assets/TEMP/7b6ce80ae4911b1ee957db9ecc4e084af087d787df15e7331707825ff8aa44a1?placeholderIfAbsent=true&apiKey=b6276752b330489880794e71a32a87ff"
          }
          alt=""
          style={starStyle}
        />
      ))}
    </div>
  );
}

export default StarRating;
