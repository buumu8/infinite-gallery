import React from "react";
import "./image-card.styles.scss";

export const ImageCard = () => {
  return (
    <div className="image-card">
      <img
        className="image"
        src="https://images.unsplash.com/photo-1649590113498-96338480568f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80"
        alt="image1"
      />
    </div>
  );
};
