import { useSelector } from "react-redux";
import { RootState } from "../Redux/Store/TicketStore";
import { Link } from "react-router-dom";

const NowShowing = () => {
  const { cinemaHall } = useSelector(
    (state: RootState) => state.filterHallReducer
  );

  return (
    <>
      <div className="px-4 mb-[16px] font-EpilogueVar font-semibold">
        <h1 className="text-3xl md:text-4xl">Now showing</h1>
      </div>
      <div className="flex flex-col justify-center items-center font-EpilogueVar lg:flex-row lg:justify-start  gap-10 px-4 mb-4">
        {cinemaHall.map((hall) =>
          hall.showDetails.map((show, index) => {
            if (show.isShowing === "true") {
              return (
                <div
                  key={index}
                  className="   overflow-hidden rounded-xl flex flex-col items-center justify-center md:flex-row "
                >
                  <img
                    className="w-[280px] h-[300px]"
                    src={show.image}
                    alt={show.title}
                  />
                </div>
              );
            }
          })
        )}
      </div>
      <div className=" flex justify-center items-center">
        <Link to="/movies">
          <button className=" bg-[#282828] text-[#f3f4e5] px-6 py-3 text-lg tracking-wide rounded-sm mb-3">
            BookNow
          </button>
        </Link>
      </div>
    </>
  );
};

export default NowShowing;
