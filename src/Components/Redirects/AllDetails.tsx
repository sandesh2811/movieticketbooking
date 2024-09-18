import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store/TicketStore";
import { useState } from "react";
import { Link } from "react-router-dom";

const AllDetails = () => {
  const { seat } = useSelector((state: RootState) => state.selectedSeat);

  const { selectedMovie } = useSelector(
    (state: RootState) => state.selectedMovieReducer
  );
  const { showTime } = useSelector(
    (state: RootState) => state.selectedShowTime
  );

  const [selectSeatType, setSelectSeatType] = useState<string>("none");

  const toggleSeatType = (value: string) => {
    if (value === "none") {
      return;
    } else if (value == "normal") {
      setSelectSeatType("normal");
    } else if (value === "platnium") setSelectSeatType("platinum");
  };

  return (
    <>
      <div>
        <h2>Movie Name: {selectedMovie.title}</h2>
        <div>
          <h2>Selected Seats: </h2>
          {seat.map((s, idx) => {
            return <span key={idx}>{s}</span>;
          })}
        </div>
        <div>
          <span>
            Note: All the field specified with * symbol are required to be
            filled!
          </span>
          <h2>Enter your full name*</h2>
          <input type="text" required />
          <h2>Enter your phone number*</h2>
          <input type="text" required />
          <h2>Enter your email</h2>
          <input type="text" />
          <h2>Please select the seat type</h2>
          <select onChange={(e) => toggleSeatType(e.target.value)}>
            <option value="none">None</option>
            <option value="normal">Normal</option>
            <option value="platinum">Platinum</option>
          </select>
          {showTime.price.map((show, index) => {
            if (show.seatType === selectSeatType) {
              return <span key={index}>Price: {show.price}</span>;
            }
          })}
        </div>
        <Link to="/ticketSummary">
          <button>Book Ticket</button>
        </Link>
      </div>
    </>
  );
};

export default AllDetails;
