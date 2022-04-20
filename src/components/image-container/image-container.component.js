import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Spinner from "../spinner/spinner.component";

import {
  getImages,
  selectImages,
  selectIsLoading,
} from "../../features/gallery/gallery-slice";

import { ImageCard } from "../image-card/image-card.component";

import "./image-container.styles.scss";

export const ImageContainer = () => {
  const photos = useSelector(selectImages);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImages(18));
  }, [dispatch]);

  return (
    <div className="image-container">
      {photos.map((photo) => {
        return isLoading ? (
          <Spinner />
        ) : (
          <ImageCard key={photo.id} photo={photo} />
        );
      })}
    </div>
  );
};
