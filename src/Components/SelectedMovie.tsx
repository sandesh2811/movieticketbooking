import { useSelector } from "react-redux";
import { RootState } from "../Redux/Store/TicketStore";
import HallList from "./HallList";
import Navbar from "./Navbar";

const SelectedMovie = () => {
  const { selectedMovie } = useSelector(
    (state: RootState) => state.selectedMovieReducer
  );

  return (
    <>
      <Navbar />
      <div className="font-EpilogueVar px-4 mt-8">
        <h1 className="text-3xl tracking-wide md:text-4xl lg:text-5xl uppercase font-semibold mb-4">
          Movie Details
        </h1>
        <div className="flex items-center flex-col  gap-6 md:flex-row md:gap-10 lg:w-[1240px] lg:mx-auto lg:justify-center">
          <img
            className="max-w-[210px] max-h-[300px] object-cover"
            src={selectedMovie.image}
            alt={selectedMovie.title}
          />
          <div className="flex flex-col gap-3">
            <h3 className="text-xl tracking-wide font-semibold">
              {selectedMovie.title}
            </h3>
            <span className="text-lg lg:text-2xl">{selectedMovie.genre}</span>
            <span className="text-lg lg:text-2xl">
              {selectedMovie.duration}
            </span>
            <p className="text-lg lg:text-2xl">{selectedMovie.description}</p>
          </div>
        </div>
      </div>
      <HallList />
    </>
  );
};

export default SelectedMovie;
