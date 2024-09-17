import { useState } from "react";
import AllDetails from "./AllDetails";
import { useDispatch } from "react-redux";
import { updateSelectedSeats } from "../Redux/Slices/SelectedSeats";

const SeatSelection = () => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const [selectedSeatArr, setSelectedSeatArr] = useState<string[]>([]);

  const dispatch = useDispatch();

  const storeSelectedSeat = (seat: string) => {
    setSelectedSeatArr([...selectedSeatArr, seat]);
  };

  return (
    <>
      <div>This is seat selection</div>
      <h1>Screen This way</h1>
      <div
        style={{
          backgroundColor: "#f3f4e5",
          height: "50vh",
          display: "flex",
          alignItems: "center",
          gap: "2.5rem",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "3rem",
          }}
        >
          <span>J</span>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <button
              id="J1"
              onClick={() => {
                setIsSelected(true);
                storeSelectedSeat("J1");
                dispatch(updateSelectedSeats(selectedSeatArr));
              }}
            >
              J1
            </button>
            <button
              id="J2"
              onClick={() => {
                setIsSelected(true);
                storeSelectedSeat("J2");
                dispatch(updateSelectedSeats(selectedSeatArr));
              }}
            >
              J2
            </button>
            <button
              id="J3"
              onClick={() => {
                setIsSelected(true);
                storeSelectedSeat("J3");
                dispatch(updateSelectedSeats(selectedSeatArr));
              }}
            >
              J3
            </button>
            <button id="J4">J4</button>
            <button id="J5">J5</button>
            <button id="J6">J6</button>
            <button id="J7">J7</button>
            <button id="J8">J8</button>
            <button id="J9">J9</button>
            <button id="J10">J10</button>
          </div>
        </div>
      </div>
      {isSelected && <AllDetails />}
    </>
  );
};

export default SeatSelection;
