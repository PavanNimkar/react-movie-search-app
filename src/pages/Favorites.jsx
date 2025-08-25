import React from "react";
import { Link } from "react-router-dom";
import { useMovieContext } from "../Contexts/MovieContext";
import MovieCard from "../components/MovieCard";

// FontAwesomeIcon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

export default function FavoritesWithEarlyReturn() {
  const { favourites } = useMovieContext();

  if (!favourites) {
    return (
      <div className="m-20 md:m-[10rem] flex justify-center items-center">
        <div>Loading...</div>
      </div>
    );
  }

  if (favourites.length === 0) {
    return (
      <div className="m-20 md:m-[10rem] flex justify-center items-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">No Favorites Yet</h2>
          <Link
            to="/"
            class="flex items-center justify-center w-full sm:w-auto sm:inline-flex px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-red-800 text-white font-bold text-sm sm:text-base lg:text-lg rounded-md shadow-lg hover:from-red-700 hover:to-red-900 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
          >
            <span class="text-center sm:text-left">
              Start adding movies to your favorites!
            </span>
            <FontAwesomeIcon icon="fa-solid fa-angle-right" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="md:m-[5rem] flex flex-col justify-center items-center">
      <h2 className="mt-[5rem] lg:mt-0 text-2xl font-bold text-center">
        Your Favorites Movies
      </h2>
      <div className="movies-container flex flex-wrap justify-start items-center w-full">
        {favourites.map((movie) => (
          <MovieCard key={movie.id || movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}
