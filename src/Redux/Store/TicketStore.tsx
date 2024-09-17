import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from "../Slices/GetMovieSlice";
import HallReducerSlice from "../Slices/HallReducerSlice";
import FilterHallSlice from "../Slices/FilterHallSlice";
import SelectedMovieSlice from "../Slices/SelectedMovieSlice";
import SelectedHallSlice from "../Slices/SelectedHallSlice";
import SelectedShowTime from "../Slices/SelectedShowTime";
import SelectedSeats from "../Slices/SelectedSeats";

export const TicketStore = configureStore({
  reducer: {
    movieReducer: MovieReducer,
    hallReducer: HallReducerSlice,
    filterHallReducer: FilterHallSlice,
    selectedMovieReducer: SelectedMovieSlice,
    selectedHallReducer: SelectedHallSlice,
    selectedShowTime: SelectedShowTime,
    selectedSeat: SelectedSeats,
  },
});

export type RootState = ReturnType<typeof TicketStore.getState>;

export type AppDispatch = typeof TicketStore.dispatch;
