import { useSelector } from "react-redux";
import Footer from "../Front/Footer";
import Navbar from "../Front/Navbar";
import { RootState } from "../../Redux/Store/TicketStore";

const TicketSummary = () => {
  const { selectedMovie } = useSelector(
    (state: RootState) => state.selectedMovieReducer
  );

  return (
    <>
      <Navbar />
      <div className="bg-[#282828] text-[#faf6f9] min-h-[74.6vh] mb-2 flex ">
        <section className="w-[50%] bg-slate-400">
          <div>
            <img src={selectedMovie.image} alt={selectedMovie.title} />
            <h1>{selectedMovie.title}</h1>
            <span>Duration: {selectedMovie.duration}</span>
          </div>
        </section>
        <section className="w-[50%] bg-slate-800">
          This is user details and payment option section
        </section>
      </div>
      <Footer />
    </>
  );
};

export default TicketSummary;
