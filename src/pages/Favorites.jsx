import React from "react";
import { Link } from "react-router-dom";

export default function Favorites() {
  return (
    <div className="m-20 md:m-[10rem] flex justify-center items-center ">
      <div className="text-center max-w-md">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
          Your List is Empty
        </h1>

        {/* Subtext */}
        <p className="text-gray-400 text-base sm:text-lg mb-8 leading-relaxed px-2">
          Start building your personal collection by adding movies and TV shows
          you want to watch later.
        </p>

        {/* Button */}
        <Link to="/">
          <button className="group bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 flex items-center space-x-3 mx-auto shadow-lg hover:shadow-red-600/25">
            {/* Left Icon */}
            <svg
              className="w-5 h-5 group-hover:animate-pulse"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            {/* Text */}
            <span>Browse Movies</span>
            {/* Right Arrow */}
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
}
