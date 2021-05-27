import React from "react";

import PropTypes from "prop-types";

const ResultCard = ({ movie }) => {
  return (
    <div className="flex relative">
      <div className="mr-5">
        {movie.poster_path ? (
          <img
            className="max-w-max object-cover h-52 sm:h-72"
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} poster`}
          />
        ) : (
          <img
            className=" max-w-max object-cover h-52 sm:h-72"
            src={`https://image.tmdb.org/t/p/w200${movie.backdrop_path}`}
            alt={`${movie.title} poster`}
          />
        )}
      </div>
      <div className="flex flex-col justify-between py-5">
        <div className="mt-2 text-left">
          <h3 className="font-bold text-lg sm:text-2xl ">{movie.title}</h3>
          {/* <p className="text-gray-600 text-xs ">{movie.overview}</p> */}
          <h4 className="mt-2 text-gray-600 text-lg ">
            {movie.release_date ? movie.release_date.substring(0, 4) : `-`}
          </h4>
        </div>
        <div className="pb-3">
          <button
            className="bg-green-1000 py-3 px-4 mr-3 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75"
            type="button"
          >
            Add To WatchList
          </button>
          <button
            className="bg-green-1000 py-3 px-4 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75"
            type="button"
          >
            Add To Watched
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
