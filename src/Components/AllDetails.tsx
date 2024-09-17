import { useSelector } from "react-redux";
import { RootState } from "../Redux/Store/TicketStore";
import { useState } from "react";

const AllDetails = () => {
  const { seat } = useSelector((state: RootState) => state.selectedSeat);

  const { selectedMovie } = useSelector(
    (state: RootState) => state.selectedMovieReducer
  );
  const { showTime } = useSelector(
    (state: RootState) => state.selectedShowTime
  );

  const [selectSeatType, setSelectSeatType] = useState<string>("normal");

  const toggleSeatType = () => {
    selectSeatType === "normal"
      ? setSelectSeatType("platinum")
      : setSelectSeatType("normal");
  };

  return (
    <>
      <h3>This is details section</h3>
      <div>
        <h2>{selectedMovie.title}</h2>
        <span>{selectedMovie.duration}</span>
        <span>Selected Seats:</span>
        {seat.map((s, idx) => {
          return <span key={idx}>{s}</span>;
        })}
        <select onChange={() => toggleSeatType()}>
          <option value="Normal">Normal</option>
          <option value="Platinum">Platinum</option>
        </select>
        {showTime.price.map((show, index) => {
          // console.log(show.seatType);
          // console.log(selectSeatType);

          if (show.seatType === selectSeatType) {
            return <span key={index}>Price: {show.price}</span>;
          }
        })}
        <span>Total:Rs </span>
        <div>
          <h2>Please select a payment method</h2>
          <select>
            <option value="Khalti">Khalti</option>
            <option value="Esewa">Esewa</option>
            <option value="Mobile Banking">Mobile Banking</option>
          </select>
          <span>This is for the payment details section</span>
        </div>
        <button>Book Show</button>
      </div>
    </>
  );
};

export default AllDetails;
