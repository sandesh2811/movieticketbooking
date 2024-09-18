import { useState } from "react";
import AllDetails from "./AllDetails";
import { useDispatch } from "react-redux";
import { updateSelectedSeats } from "../../Redux/Slices/SelectedSeats";
import Navbar from "../Front/Navbar";
import Footer from "../Front/Footer";

const SeatSelection = () => {
  const [isSelected, setBsSelected] = useState<boolean>(false);

  const [selectedSeatArr, setSelectedSeatArr] = useState<string[]>([]);

  const dispatch = useDispatch();

  const storeSelectedSeat = (seat: string) => {
    if (selectedSeatArr.includes(seat)) {
      const filteredSeatArr = selectedSeatArr.filter(
        (seats, index) => selectedSeatArr.indexOf(seat) !== index
      );
      setSelectedSeatArr(filteredSeatArr);
    } else {
      setSelectedSeatArr([...selectedSeatArr, seat]);
    }
  };
  const dispatchSelectedSeats = () => {
    dispatch(updateSelectedSeats(selectedSeatArr));
  };

  return (
    <>
      <Navbar />
      <div className="bg-[#f3f4e5] min-h-[50vh] flex flex-col items-center justify-center">
        <h1 className="">Screen This way</h1>
        <div className=" bg-slate-200 h-[50vh] grid grid-rows-6  gap-[2.5rem] ">
          <div className="flex justify-center items-center gap-[3rem] bg-red-300">
            <span>A</span>
            <div className="grid grid-cols-11  items-center gap-[2rem]">
              <button
                id="A1"
                onClick={() => {
                  storeSelectedSeat("A1");
                }}
              >
                A1
              </button>
              <button
                id="A2"
                onClick={() => {
                  storeSelectedSeat("A2");
                }}
              >
                A2
              </button>
              <button
                id="A3"
                onClick={() => {
                  storeSelectedSeat("A3");
                }}
              >
                A3
              </button>
              <button
                id="A4"
                onClick={() => {
                  storeSelectedSeat("A4");
                }}
              >
                A4
              </button>
              <button
                id="A5"
                onClick={() => {
                  storeSelectedSeat("A5");
                }}
              >
                A5
              </button>
              <button
                id="A6"
                onClick={() => {
                  storeSelectedSeat("A6");
                }}
              >
                A6
              </button>
              <button
                id="A7"
                onClick={() => {
                  storeSelectedSeat("A7");
                }}
              >
                A7
              </button>
              <button
                id="A8"
                onClick={() => {
                  storeSelectedSeat("A8");
                }}
              >
                A8
              </button>
              <button
                id="A9"
                onClick={() => {
                  storeSelectedSeat("A9");
                }}
              >
                A9
              </button>
              <button
                id="A10"
                onClick={() => {
                  storeSelectedSeat("A10");
                }}
              >
                A10
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center gap-[3rem] bg-red-200">
            <span>B</span>
            <div className="grid grid-cols-11 items-center gap-[2rem]">
              <button
                id="B1"
                onClick={() => {
                  storeSelectedSeat("B1");
                }}
              >
                B1
              </button>
              <button
                id="B2"
                onClick={() => {
                  storeSelectedSeat("B2");
                }}
              >
                B2
              </button>
              <button
                id="B3"
                onClick={() => {
                  storeSelectedSeat("B3");
                }}
              >
                B3
              </button>
              <button
                id="B4"
                onClick={() => {
                  storeSelectedSeat("B4");
                }}
              >
                B4
              </button>
              <button
                id="B5"
                onClick={() => {
                  storeSelectedSeat("B5");
                }}
              >
                B5
              </button>
              <button
                id="B6"
                onClick={() => {
                  storeSelectedSeat("B6");
                }}
              >
                B6
              </button>
              <button
                id="B7"
                onClick={() => {
                  storeSelectedSeat("B7");
                }}
              >
                B7
              </button>
              <button
                id="B8"
                onClick={() => {
                  storeSelectedSeat("B8");
                }}
              >
                B8
              </button>
              <button
                id="B9"
                onClick={() => {
                  storeSelectedSeat("B9");
                }}
              >
                B9
              </button>
              <button
                id="B10"
                onClick={() => {
                  storeSelectedSeat("B10");
                }}
              >
                B10
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center gap-[3rem]">
            <span>C</span>
            <div className="grid grid-cols-11 items-center gap-[2rem]">
              <button
                id="C1"
                onClick={() => {
                  storeSelectedSeat("C1");
                }}
              >
                C1
              </button>
              <button
                id="C2"
                onClick={() => {
                  storeSelectedSeat("C2");
                }}
              >
                C2
              </button>
              <button
                id="C3"
                onClick={() => {
                  storeSelectedSeat("C3");
                }}
              >
                C3
              </button>
              <button
                id="C4"
                onClick={() => {
                  storeSelectedSeat("C4");
                }}
              >
                C4
              </button>
              <button
                id="C5"
                onClick={() => {
                  storeSelectedSeat("C5");
                }}
              >
                C5
              </button>
              <button
                id="C6"
                onClick={() => {
                  storeSelectedSeat("C6");
                }}
              >
                C6
              </button>
              <button
                id="C7"
                onClick={() => {
                  storeSelectedSeat("C7");
                }}
              >
                C7
              </button>
              <button
                id="C8"
                onClick={() => {
                  storeSelectedSeat("C8");
                }}
              >
                C8
              </button>
              <button
                id="C9"
                onClick={() => {
                  storeSelectedSeat("C9");
                }}
              >
                C9
              </button>
              <button
                id="C10"
                onClick={() => {
                  storeSelectedSeat("C10");
                }}
              >
                C10
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center gap-[3rem]">
            <span>D</span>
            <div className="grid grid-cols-11 items-center gap-[2rem]">
              <button
                id="D1"
                onClick={() => {
                  storeSelectedSeat("D1");
                }}
              >
                D1
              </button>
              <button
                id="D2"
                onClick={() => {
                  storeSelectedSeat("D2");
                }}
              >
                D2
              </button>
              <button
                id="D3"
                onClick={() => {
                  storeSelectedSeat("D3");
                }}
              >
                D3
              </button>
              <button
                id="D4"
                onClick={() => {
                  storeSelectedSeat("D4");
                }}
              >
                D4
              </button>
              <button
                id="D5"
                onClick={() => {
                  storeSelectedSeat("D5");
                }}
              >
                D5
              </button>
              <button
                id="D6"
                onClick={() => {
                  storeSelectedSeat("D6");
                }}
              >
                D6
              </button>
              <button
                id="D7"
                onClick={() => {
                  storeSelectedSeat("D7");
                }}
              >
                D7
              </button>
              <button
                id="D8"
                onClick={() => {
                  storeSelectedSeat("D8");
                }}
              >
                D8
              </button>
              <button
                id="D9"
                onClick={() => {
                  storeSelectedSeat("D9");
                }}
              >
                D9
              </button>
              <button
                id="D10"
                onClick={() => {
                  storeSelectedSeat("D10");
                }}
              >
                D10
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center gap-[3rem]">
            <span>E</span>
            <div className="grid grid-cols-11 items-center gap-[2rem]">
              <button
                id="E1"
                onClick={() => {
                  storeSelectedSeat("E1");
                }}
              >
                E1
              </button>
              <button
                id="E2"
                onClick={() => {
                  storeSelectedSeat("E2");
                }}
              >
                E2
              </button>
              <button
                id="E3"
                onClick={() => {
                  storeSelectedSeat("E3");
                }}
              >
                E3
              </button>
              <button
                id="E4"
                onClick={() => {
                  storeSelectedSeat("E4");
                }}
              >
                E4
              </button>
              <button
                id="E5"
                onClick={() => {
                  storeSelectedSeat("E5");
                }}
              >
                E5
              </button>
              <button
                id="E6"
                onClick={() => {
                  storeSelectedSeat("E6");
                }}
              >
                E6
              </button>
              <button
                id="E7"
                onClick={() => {
                  storeSelectedSeat("E7");
                }}
              >
                E7
              </button>
              <button
                id="E8"
                onClick={() => {
                  storeSelectedSeat("E8");
                }}
              >
                E8
              </button>
              <button
                id="E9"
                onClick={() => {
                  storeSelectedSeat("E9");
                }}
              >
                E9
              </button>
              <button
                id="E10"
                onClick={() => {
                  storeSelectedSeat("E10");
                }}
              >
                E10
              </button>
            </div>
          </div>
          <div>
            <button
              onClick={() => {
                dispatchSelectedSeats();
                setBsSelected(true);
              }}
            >
              Confirm Selection
            </button>
          </div>
        </div>
      </div>
      {isSelected && <AllDetails />}
      <Footer />
    </>
  );
};

export default SeatSelection;
