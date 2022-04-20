import React from "react";
import "./image-card.styles.scss";

export const ImageCard = ({ photo }) => {
  const { alt_description, urls } = photo;
  return (
    <div className="image-card">
      <img className="image" src={urls.thumb} alt={alt_description} />
    </div>
  );
};
