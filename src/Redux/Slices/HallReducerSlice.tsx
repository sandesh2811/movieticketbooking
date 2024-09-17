// Improvement needed in code . Declaring type for initial state.

import { createSlice } from "@reduxjs/toolkit";
import { cinemaHalls } from "../../Data/CinemaHallData.json";

const mappedCinemaHalls = cinemaHalls.map((hall) => {
  return hall.city;
});

// console.log(mappedCinemaHalls);

const initialState = mappedCinemaHalls;

export const HallReducerSlice = createSlice({
  name: "Halls",
  initialState,
  reducers: {},
});

export default HallReducerSlice.reducer;
