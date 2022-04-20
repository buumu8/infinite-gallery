import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import galleryReducer from "../features/gallery/gallery-slice";

const middleWares = [process.env.NODE_ENV !== "production" && logger].filter(
  Boolean
);

export const store = configureStore({
  reducer: {
    gallery: galleryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleWares),
  devTools: process.env.NODE_ENV !== "production",
});
