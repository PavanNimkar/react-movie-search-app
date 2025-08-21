import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);
export default function MovieCard({ movie }) {
  return (
    <>
      {/* Single Movie Card - Mobile Responsive */}
      <div className="mb-[1.5rem] flex items-center w-full justify-center sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 py-4 p-10">
        <div className="w-full bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 group">
          <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden cursor-pointer">
            <img
              src={
                movie.Poster ||
                "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZW1wdHklMjB0aGVhdGVyfGVufDB8fDB8fHww"
              }
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              alt={movie.Title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

            {/* Heart Button */}
            <button className="absolute top-2 right-2 sm:top-3 sm:right-3 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/50 hover:bg-black/70 transition-all duration-200 flex items-center justify-center cursor-pointer">
              <FontAwesomeIcon
                icon="fa-regular fa-heart"
                className="text-white text-sm sm:text-base"
              />
            </button>

            {/* Movie Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
              <h3 className="text-white text-sm sm:text-lg font-bold truncate">
                {movie.Title || "Not Found"}
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm">
                {movie.Runtime || ""}
              </p>
              <p className="text-gray-300 text-xs sm:text-sm">
                {movie.Year || ""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
