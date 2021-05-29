import React, { useContext, useState, useEffect } from "react";

import PropTypes from "prop-types";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";

import { GlobalContext } from "../context/GlobalState";
import arabica from "url:../assets/arabica-172.png";

const ResultCard = ({ movie }) => {
  const { addMovieToWatchList, addMovieToWatched, watchList, watched } =
    useContext(GlobalContext);

  let storedMovie = watchList.find((item) => item.id === movie.id);
  let storedMovieWatched = watched.find((item) => item.id === movie.id);

  const watchListDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  const watchedDisabled = storedMovieWatched ? true : false;

  // button Change
  let Inner;
  const [buttonChange, setButtonChange] = useState(Inner);

  if (typeof window !== "undefined") {
    Inner = window.innerWidth;
  }

  const windowWidth = buttonChange <= 960 ? false : true;

  useEffect(() => {
    const handleWindowResize = () => setButtonChange(window.innerWidth);

    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div className="flex relative group">
      <div className="mr-1 sm:mr-5">
        {movie.poster_path ? (
          <img
            className="max-w-max object-cover h-52 sm:h-72"
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} poster`}
          />
        ) : (
          <img
            className="max-w-max object-cover mr-11 h-52 sm:h-72"
            src={arabica}
            alt={`${movie.title} poster`}
          />
        )}
      </div>
      <div className="flex flex-col justify-between py-1 sm:py-5">
        <div className="mt-2 text-left">
          <h3 className="font-bold text-base sm:text-2xl ">{movie.title}</h3>
          <h4 className="mt-2 text-gray-600 text-base sm:text-lg ">
            {movie.release_date ? movie.release_date.substring(0, 4) : `-`}
          </h4>
        </div>
        <div className="flex flex-row flex-nowrap items-center content-center opacity-0 group-hover:opacity-100">
          <button
            className="bg-green-1000 py-2 px-3 mr-3 text-white
          font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2
          focus:ring-opacity-75 disabled:opacity-50 sm:py-3 sm:px-4"
            type="button"
            disabled={watchListDisabled}
            onClick={() => addMovieToWatchList(movie)}
          >
            {windowWidth ? (
              "Add To WatchList"
            ) : (
              <EyeOffIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            )}
          </button>
          <button
            className="bg-green-1000 py-2 px-3 mr-3 text-white mt-1
          font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2
          focus:ring-opacity-75 disabled:opacity-50 sm:py-3 sm:px-4"
            type="button"
            disabled={watchedDisabled}
            onClick={() => addMovieToWatched(movie)}
          >
            {windowWidth ? (
              "Add To Watched"
            ) : (
              <EyeIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white " />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

ResultCard.propTypes = {
  movie: PropTypes.object,
};

export default ResultCard;
