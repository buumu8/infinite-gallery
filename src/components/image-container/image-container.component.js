import React from "react";

import { ImageCard } from "../image-card/image-card.component";

import "./image-container.styles.scss";

export const ImageContainer = () => {
  return (
    <div className="image-container">
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
    </div>
  );
};
