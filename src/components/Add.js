import React, { useState } from "react";

import ResultCard from "./ResultCard";

import Recording from "../assets/Recording-a-movie-rafiki.svg";

const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (!data.errors) {
          setResults(data.results);
        } else { 
          setResults([]);
        }
      });
  };


  return (
    <div className="block">
      <div className="md:w-10/12 w-full m-auto">
        <div className="mt-12">
          <div className="text-center">
            <input
              className="bg-blue-1000  w-5/6 h-11 rounded-xl pl-4
                text-white font-normal focus:outline-none text-base lg:w-3/6 sm:w-5/6 "
              type="text"
              placeholder="Search for a movie"
              value={query}
              onChange={onChange}
            />
          </div>
        </div>
        {results.length > 0 ? (
          <ul className="pt-8 grid grid-cols-1 xl:grid-cols-2 text-center">
            {results.map((movie) => (
              <li
                key={movie.id}
                className="my-4 w-10/12 mx-auto bg-white rounded-xl shadow-md overflow-hidden xl:w-95"
              >
                <ResultCard movie={movie} />
              </li>
            ))}
          </ul>
        ) : 
          
          <div className="flex justify-center mt-24">
          <img src={Recording} alt="" className="max-w-full h-96 opacity-70" />
          </div>
          
        }
      </div>
    </div>
  );
};

export default Add;
