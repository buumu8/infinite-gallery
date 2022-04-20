import React, { useState, useEffect, useCallback } from "react";

import { ImageCard } from "../image-card/image-card.component";

import "./image-container.styles.scss";

export const ImageContainer = () => {
  const apiUrl = `/.netlify/functions/token-hider`;
  const [photos, setPhotos] = useState([]);

  const getPhotos = useCallback(
    async (count) => {
      try {
        const response = await fetch(`${apiUrl}?count=${count}`);
        const result = await response.json();
        setPhotos(result);
      } catch (error) {
        console.log(error);
      }
    },
    [apiUrl]
  );

  useEffect(() => {
    getPhotos(18);
  }, [getPhotos]);

  return (
    <div className="image-container">
      {photos.map((photo) => (
        <ImageCard key={photo.id} photo={photo} />
      ))}
    </div>
  );
};
