import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className=" h-[50vh] relative font-EpilogueVar">
      <div className="bg-[#282828] h-full opacity-70"></div>
      <div className="absolute top-[50%] left-0 translate-y-[-50%] flex flex-col gap-4 px-4 ">
        <h1 className="text-4xl tracking-wide md:text-5xl lg:text-6xl uppercase font-semibold">
          BookMovies
        </h1>
        <div>
          <p className="text-lg lg:text-2xl">
            An easier and faster way of booking movies.
          </p>
          <p className="text-lg lg:text-2xl">
            Book your favourite movies in your city in your favourite movie hall
            in just few minutes.
          </p>
        </div>

        <Link to="/movies">
          <button className=" bg-[#f3f4e5] px-6 py-3 text-lg tracking-wide rounded-sm ">
            BookNow
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
