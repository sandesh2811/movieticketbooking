import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cinemaHalls } from "../../Data/CinemaHallData.json";

type Price = {
  seatType: string;
  price: string;
};

export type ShowTime = {
  type: string;
  time: string;
  price: Price[];
};

type ShowDetails = {
  isShowing: string;
  image: string | undefined;
  title: string;
  showTime: ShowTime[];
};

export type CinemaHallType = {
  name: string;
  city: string;
  image: string;
  address: string;
  showDetails: ShowDetails[];
};

type CinemaHallState = {
  cinemaHall: CinemaHallType[];
};

const initialState: CinemaHallState = {
  cinemaHall: cinemaHalls,
};

export const FilterHallSlice = createSlice({
  name: "filterHalls",
  initialState,
  reducers: {
    filterHalls: (state: CinemaHallState, action: PayloadAction<string>) => {
      const filteredHalls: CinemaHallType[] = state.cinemaHall.filter(
        (hall) => hall.city === action.payload
      );
      console.log(filteredHalls);

      state.cinemaHall = filteredHalls;
    },
  },
});

export const { filterHalls } = FilterHallSlice.actions;

export default FilterHallSlice.reducer;
