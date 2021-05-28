import React, { useContext, useState, useEffect } from "react";

import PropTypes from "prop-types";
import { TrashIcon, EyeIcon, EyeOffIcon } from "@heroicons/react/solid";

import { GlobalContext } from "../context/GlobalState";

export const MovieControls = ({ movie, type }) => {
  let Inner;
  const [buttonChange, setButtonChange] = useState(Inner);

  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    moveToWatchList,
    removeFromWatched,
  } = useContext(GlobalContext);

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
    <>
      {type === "watchList" && (
        <>
          <button
            className="bg-green-1000 py-2 px-3  mr-3 text-white
          font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2
          focus:ring-opacity-75 sm:py-3 sm:px-4"
            type="button"
            onClick={() => addMovieToWatched(movie)}
          >
            {windowWidth ? (
              "Add To Watched"
            ) : (
              <EyeIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white " />
            )}
          </button>
          <button
            className="bg-green-1000 py-2 px-3  mr-3 text-white mt-1
          font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2
          focus:ring-opacity-75 sm:py-3 sm:px-4"
            type="button"
            onClick={() => removeMovieFromWatchlist(movie.id)}
          >
            {windowWidth ? (
              "Remove"
            ) : (
              <TrashIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            )}
          </button>
        </>
      )}
      {type === "watched" && (
        <>
          <button
            className="bg-green-1000 py-2 px-3  mr-3 text-white
          font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2
          focus:ring-opacity-75 sm:py-3 sm:px-4"
            type="button"
            onClick={() => moveToWatchList(movie)}
          >
            {windowWidth ? (
              "Add To WatchList"
            ) : (
              <EyeOffIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            )}
          </button>
          <button
            className="bg-green-1000 py-2 px-3 text-white mt-1
          font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2
          focus:ring-opacity-75  sm:py-3 sm:px-4"
            type="button"
            onClick={() => removeFromWatched(movie.id)}
          >
            {windowWidth ? (
              "Remove"
            ) : (
              <TrashIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            )}
          </button>
        </>
      )}
    </>
  );
};

MovieControls.propTypes = {
  movie: PropTypes.object,
  type: PropTypes.string,
};
