import {
  createAsyncThunk,
  createSlice,
  createSelector,
} from "@reduxjs/toolkit";

import camelize from "camelize";

const initialState = {
  images: [],
  loading: false,
  error: null,
};

export const getImages = createAsyncThunk(
  "gallery/getImages",
  async (count, { rejectWithValue }) => {
    const apiUrl = `/.netlify/functions/token-hider`;
    try {
      const response = await fetch(`${apiUrl}?count=${count}`);
      const result = await response.json();
      if (result.length !== count) {
        return rejectWithValue(result.data);
      }
      return camelize(result);
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);

export const selectGallery = (state) => state.gallery;
export const selectImages = createSelector(
  [selectGallery],
  (gallerySlice) => gallerySlice.images
);
export const selectIsLoading = createSelector(
  [selectGallery],
  (gallerySlice) => gallerySlice.loading
);
export const selectError = createSelector(
  [selectGallery],
  (gallerySlice) => gallerySlice.error
);

export const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {},
  extraReducers: {
    [getImages.pending]: (state) => {
      state.loading = true;
    },
    [getImages.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.images = state.images.concat(payload);
      state.error = null;
    },
    [getImages.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

// export const { getImages } = gallerySlice.actions;

export default gallerySlice.reducer;
