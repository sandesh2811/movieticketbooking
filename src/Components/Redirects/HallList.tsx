import { ChangeEvent, useState } from "react";
import { RootState } from "../../Redux/Store/TicketStore";
import { useDispatch, useSelector } from "react-redux";
import MovieTimeModal from "./MovieTimeModal";
import { updateSelectedHall } from "../../Redux/Slices/SelectedHallSlice";

const HallList = () => {
  const { cinemaHall } = useSelector(
    (state: RootState) => state.filterHallReducer
  );
  const dispatch = useDispatch();

  const [hallLocation, setHallLocation] = useState<string>("Nepal");
  const [showModal, setShowModal] = useState<boolean>(false);

  const hallLocationByCity = (e: ChangeEvent<HTMLSelectElement>) => {
    setHallLocation(e.target.value);
  };

  const filteredHalls = cinemaHall.filter((hall) => {
    if (hallLocation === "Nepal") {
      return hall;
    } else if (hall.city === hallLocation) {
      return hall;
    }
  });

  return (
    <div className="my-16 px-4 font-EpilogueVar">
      <h3 className="text-2xl tracking-wide font-semibold">
        Please select cinemahall based on your location
      </h3>
      <select
        className="border-2 border-[#282828] rounded-md px-2 py-3 max-w-[300px] my-2"
        onChange={(e) => hallLocationByCity(e)}
      >
        <option value="Nepal">Nepal</option>
        <option value="Butwal">Butwal</option>
        <option value="Kathmandu">Kathmandu</option>
        <option value="Pokhara">Pokhara</option>
      </select>
      <h3 className="text-2xl tracking-wide font-semibold my-3">Halls List</h3>
      <div className="flex flex-col  items-center gap-8 md:flex-row md:flex-wrap justify-center">
        {filteredHalls.map((hall, index) => {
          return (
            <div
              className="flex flex-col items-center gap-4 drop-shadow-lg  px-4 hover:scale-105 duration-200 ease-in-out border-2 py-4 bg-slate-100"
              key={index}
              onClick={() => {
                setShowModal(!showModal);
                dispatch(
                  updateSelectedHall({
                    name: hall.name,
                    city: hall.city,
                    image: hall.image,
                    address: hall.address,
                    showDetails: hall.showDetails,
                  })
                );
              }}
            >
              <img className="object-cover" src={hall.image} alt={hall.name} />
              <h3 className="text-2xl tracking-wide font-semibold my-3">
                {hall.name}
              </h3>
              <span className="text-lg lg:text-2xl">{hall.address}</span>
            </div>
          );
        })}
      </div>
      {showModal && <MovieTimeModal />}
    </div>
  );
};

export default HallList;
