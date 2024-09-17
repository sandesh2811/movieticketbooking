// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import { movies } from "../../Data/MovieData.json";

// console.log(movies);

// type PriceType = {
//   seatType: string;
//   price: string;
// };

export type MovieType = {
  id: number | null;
  title: string;
  genre: string[] | null;
  duration: string;
  description: string;
  image: string;
  language: string;
};

// const initialState: MovieType[] = [
//   {
//     id: null,
//     title: "",
//     genre: null,
//     duration: "",
//     description: "",
//     image: "",
//   },
// ];
const initialState: MovieType[] = movies;

const GetMovieSlice = createSlice({
  name: "getMovie",
  initialState,
  reducers: {},

  // extraReducers: (builder) => {
  //   builder
  //     .addCase(FetchMovie.pending, () => {
  //       console.log("Movie List is pending");
  //     })
  //     .addCase(FetchMovie.fulfilled, () => {
  //       console.log("data is fetched");
  //     });
  // },
});

// export const FetchMovie = createAsyncThunk(
//   "getMovie/fetchMovieAsync",

//   async () => {
//     try {
//       const rawData = await fetch("../../Data/MovieData.json");

//       const jsonData = await rawData.json();

//       return jsonData;
//     } catch (err: any) {
//       throw new Error(err);
//     }
//   }
// );

export default GetMovieSlice.reducer;
