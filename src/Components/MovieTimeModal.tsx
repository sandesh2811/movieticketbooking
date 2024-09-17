import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/Store/TicketStore";
import { updateSelectedShowTime } from "../Redux/Slices/SelectedShowTime";
import { Link } from "react-router-dom";

const MovieTimeModal = () => {
  const { selectedHall } = useSelector(
    (state: RootState) => state.selectedHallReducer
  );

  const dispatch = useDispatch();

  const { selectedMovie } = useSelector(
    (state: RootState) => state.selectedMovieReducer
  );

  const [selectDay, setSelectDay] = useState<string>("Today");

  const toggleDay = () => {
    selectDay === "Today" ? setSelectDay("Tomorrow") : setSelectDay("Today");
  };

  return (
    <div className="font-EpilogueVar px-4 mt-8">
      <div className="flex flex-col gap-6">
        <h3 className="text-xl tracking-wide font-semibold">
          Please select the time and date
        </h3>
        <div className="flex justify-center items-center gap-4">
          <button
            className=" bg-[#282828] text-[#f3f4e5] px-6 py-3 text-lg tracking-wide rounded-sm "
            onClick={() => toggleDay()}
          >
            Today
          </button>
          <button
            className=" bg-[#282828] text-[#f3f4e5] px-6 py-3 text-lg tracking-wide rounded-sm "
            onClick={() => toggleDay()}
          >
            Tomorrow
          </button>
        </div>
        <div className="flex items-center flex-col">
          <h3 className="text-xl tracking-wide font-semibold my-4">
            Available Showtime
          </h3>
          {selectDay === "Today" ? (
            <>
              {selectedHall.showDetails.map(
                (showDetail) =>
                  showDetail.title === selectedMovie.title &&
                  showDetail.showTime.map((show, index) => {
                    return (
                      <div
                        key={index}
                        className=" grid grid-cols-3 grid-rows-2 items-center "
                      >
                        <span className="text-lg lg:text-2xl">{show.type}</span>
                        <div>
                          <Link to="/selectSeats">
                            <button
                              className=" bg-[#282828] text-[#f3f4e5] px-6 py-3 text-lg tracking-wide rounded-sm "
                              onClick={() =>
                                dispatch(updateSelectedShowTime(show))
                              }
                            >
                              {show.time}
                            </button>
                          </Link>
                        </div>
                      </div>
                    );
                  })
              )}
            </>
          ) : (
            <div className="flex justify-center items-center gap-4">
              <button className=" bg-[#282828] text-[#f3f4e5] px-6 py-3 text-lg tracking-wide rounded-sm ">
                12:30pm
              </button>
              <button className=" bg-[#282828] text-[#f3f4e5] px-6 py-3 text-lg tracking-wide rounded-sm ">
                8:30pm
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieTimeModal;
