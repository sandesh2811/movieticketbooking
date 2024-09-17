import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";

export type SelectedSeatType = {
  seat: string[];
};

// type SelectedSeatState = {
//   selectedSeats: SelectedSeatType[];
// };

// const initialState: SelectedSeatState = {
//   selectedSeats: [],
// };
const initialState: SelectedSeatType = {
  seat: [],
};

const SelectedSeats = createSlice({
  name: "SelectedSeats",
  initialState,
  reducers: {
    updateSelectedSeats: (
      state: SelectedSeatType,
      action: PayloadAction<string[]>
    ) => {
      state.seat = action.payload;
      // Button ma assign garne
    },
  },
});

export default SelectedSeats.reducer;

export const { updateSelectedSeats } = SelectedSeats.actions;
