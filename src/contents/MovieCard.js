import React from "react";

import PropTypes from "prop-types";

import { MovieControls } from "./MovieControls";
import arabica from "../assets/arabica-172.png";

const MovieCard = ({ movie, type }) => {
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
        <div className="flex flex-row flex-nowrap items-center content-center">
          <MovieControls movie={movie} type={type} />
        </div>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object,
  type: PropTypes.string,
};

export default MovieCard;
