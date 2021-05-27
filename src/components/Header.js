/* eslint-disable no-unused-vars */
import React from "react";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-3 bg-blue-1000">
      <div className="container m-auto">
        <div className="flex flex-row flex-nowrap justify-between items-center content-between">
          <div>
            <Link className="text-white font-black text-2xl font-source" to="/">
              WatchList
            </Link>
          </div>
          <ul className="flex items-center justify-center content-center">
            <li className="pr-3">
              <Link className="font-normal text-1xl text-white" to="/">
                Watch List
              </Link>
            </li>
            <li className="pr-3">
              <Link className="text-white font-normal text-1xl" to="/Watched">
                Watched
              </Link>
            </li>
            <li>
              <Link
                className="py-2 px-5 font-medium text-1xl bg-green-1000 rounded-xl focus:outline-none focus:ring-2 focus:ring-opacity-75"
                to="/add"
              >
                Add
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
