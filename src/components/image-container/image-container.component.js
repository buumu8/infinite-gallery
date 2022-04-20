import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Spinner from "../spinner/spinner.component";

import {
  getImages,
  selectImages,
  selectIsLoading,
  selectError,
} from "../../features/gallery/gallery-slice";

import { ImageCard } from "../image-card/image-card.component";

import "./image-container.styles.scss";

export const ImageContainer = () => {
  const photos = useSelector(selectImages);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImages(18));
  }, [dispatch]);

  useEffect(() => {
    //throw error to error boundary
    if (error) {
      throw new Error(error);
    }
  }, [error]);

  return !photos.length ? (
    <Spinner />
  ) : (
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
