import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ShowTime } from "./FilterHallSlice";

type showTimeState = {
  showTime: ShowTime;
};

const initialState: showTimeState = {
  showTime: {
    type: "",
    time: "",
    price: [],
  },
};

const SelectedShowTime = createSlice({
  name: "SelectedShowTime",
  initialState,
  reducers: {
    updateSelectedShowTime: (
      state: showTimeState,
      action: PayloadAction<ShowTime>
    ) => {
      const { type, time, price } = action.payload;
      console.log(action.payload);

      state.showTime = {
        type: type,
        time: time,
        price: price,
      };
    },
  },
});

export default SelectedShowTime.reducer;

export const { updateSelectedShowTime } = SelectedShowTime.actions;
