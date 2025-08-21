import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav
      className="fixed top-0 w-full z-50 bg-black shadow transition-all duration-300"
      id="navbar"
    >
      <div className="px-4 md:px-16 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-red-600 text-2xl font-bold">
          <Link to="/">MovieMaze</Link>
        </div>

        {/* Desktop Nav (text) */}
        <div className="hidden md:flex space-x-6 font-medium">
          <Link to="/">Home</Link>
          <Link to="/favorites">Favourites</Link>
        </div>

        {/* Mobile Nav (icons) */}
        <div className="flex space-x-6 md:hidden text-xl">
          <Link to="/">
            <FontAwesomeIcon icon="fa-solid fa-house" />
          </Link>
          <Link to="/favorites">
            <FontAwesomeIcon icon="fa-regular fa-heart" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
