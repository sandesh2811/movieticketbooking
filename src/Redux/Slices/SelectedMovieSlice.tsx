import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieType } from "./GetMovieSlice";

// Using utility types to remove language since we are not using it in our selected movie.

type SelectedMovieType = Omit<MovieType, "language">;

type SelectedMovieState = {
  selectedMovie: SelectedMovieType;
};

const initialState: SelectedMovieState = {
  selectedMovie: {
    id: null,
    title: "",
    genre: null,
    duration: "",
    description: "",
    image: "",
  },
};

const SelectedMovie = createSlice({
  name: "SelectedMovie",
  initialState,
  reducers: {
    updateSelectedMovie: (
      state: SelectedMovieState,
      action: PayloadAction<SelectedMovieType>
    ) => {
      // console.log(action.payload);
      const { id, title, description, image, genre, duration } = action.payload;

      state.selectedMovie = {
        id: id,
        title: title,
        genre: genre,
        description: description,
        duration: duration,
        image: image,
      };
    },
  },
});

export default SelectedMovie.reducer;

export const { updateSelectedMovie } = SelectedMovie.actions;
