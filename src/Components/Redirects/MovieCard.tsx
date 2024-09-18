import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../../Redux/Store/TicketStore";
import { useState } from "react";
import { updateSelectedMovie } from "../../Redux/Slices/SelectedMovieSlice";
import { Link } from "react-router-dom";

const MovieCard = () => {
  const movieList = useSelector((state: RootState) => state.movieReducer);

  const dispatch = useDispatch<AppDispatch>();

  const [language, setLanguage] = useState<string>("All");

  const selectLanguage = (value: string) => {
    setLanguage(value);
  };

  const filterMovies = movieList.filter((movie) => {
    if (language === "All") {
      return movie;
    } else if (movie.language === language) {
      return movie;
    }
  });

  return (
    <div className="font-EpilogueVar px-4 py-6 flex flex-col gap-4 justify-center">
      <h3 className="text-4xl tracking-wide font-semibold uppercase">Movies</h3>
      <div className="flex flex-col  gap-4">
        <span className="text-lg lg:text-2xl">Filter Movies</span>
        <select
          className="border-2 border-[#282828] rounded-md px-2 py-3 max-w-[300px]"
          onChange={(e) => selectLanguage(e.target.value)}
        >
          <option value="All">All</option>
          <option value="English">English</option>
          <option value="Nepali">Nepali</option>
          <option value="Hindi">Hindi</option>
        </select>
      </div>
      <div className="flex justify-center items-center flex-col md:grid md:grid-cols-3 lg:grid-cols-5  gap-16">
        {filterMovies.map((movie) => {
          return (
            <Link to="/selectedMovie" key={movie.id}>
              <div
                className="flex flex-col items-center gap-6 drop-shadow-lg pb-2 px-2 hover:scale-105 duration-200 ease-in-out"
                onClick={() =>
                  dispatch(
                    updateSelectedMovie({
                      id: movie.id,
                      title: movie.title,
                      description: movie.description,
                      duration: movie.duration,
                      genre: movie.genre,
                      image: movie.image,
                    })
                  )
                }
              >
                <img
                  className="max-w-[210px] max-h-[300px] object-cover"
                  src={movie.image}
                  alt={movie.title}
                />
                <h3 className="text-lg tracking-wide ">{movie.title}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MovieCard;
