import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CinemaHallType } from "./FilterHallSlice";

// if we don't use certain properties then we will omit later

type SelectedHallState = {
  selectedHall: CinemaHallType;
};

const initialState: SelectedHallState = {
  selectedHall: {
    name: "",
    city: "",
    image: "",
    address: "",
    showDetails: [],
  },
};

const SelectedHall = createSlice({
  name: "SelectedHall",
  initialState,
  reducers: {
    updateSelectedHall: (
      state: SelectedHallState,
      action: PayloadAction<CinemaHallType>
    ) => {
      const { name, city, image, address, showDetails } = action.payload;

      state.selectedHall = {
        name: name,
        city: city,
        image: image,
        address: address,
        showDetails: showDetails,
      };
    },
  },
});

export default SelectedHall.reducer;

export const { updateSelectedHall } = SelectedHall.actions;
