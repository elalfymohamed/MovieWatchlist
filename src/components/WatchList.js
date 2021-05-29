import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";
import MovieCard from "../contents/MovieCard";

import Home from "url:../assets/Home-cinema-rafiki.svg";

const WatchList = () => {
  const { watchList } = useContext(GlobalContext);
  return (
    <>
      <section className=" w-full m-auto md:w-10/12">
        <div>
          <div className="my-7 ml-3 flex justify-between item-center">
            <h1 className="text-1xl font-black text-blue-1001 sm:text-3xl">
              My WatchList
            </h1>
            {watchList.length > 0 && (
              <div
                className="bg-green-1000 mr-2 py-1 px-3 rounded-3xl 
              text-center text-base sm:py-2 sm:px-4"
              >
                {watchList.length} {watchList.length === 1 ? "Movie" : "Movies"}
              </div>
            )}
          </div>
          {watchList.length > 0 ? (
            <ul className="pt-8 grid grid-cols-1 xl:grid-cols-2 text-center">
              {watchList.map((movie) => (
                <li
                  key={movie.id}
                  className="my-4 w-10/12 mx-auto bg-white rounded-xl shadow-md overflow-hidden xl:w-95"
                >
                  <MovieCard movie={movie} type="watchList" />
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex flex-nowrap flex-col items-center justify-center mt-24">
              <img className="max-w-full h-96" src={Home} alt="" />
              <p className="font-normal text-base text-gray-500 sm:text-2xl ">
                No movie in your list. add some!
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default WatchList;
