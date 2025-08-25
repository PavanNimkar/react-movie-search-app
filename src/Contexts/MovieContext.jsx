import { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext();
export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  // Initialize with data from localStorage immediately
  const [favourites, setFavourites] = useState(() => {
    console.log("🔍 Initializing with localStorage data...");
    try {
      const storedFavs = localStorage.getItem("favourites");
      console.log("📦 Raw localStorage data:", storedFavs);

      if (storedFavs) {
        const parsed = JSON.parse(storedFavs);
        console.log("✅ Parsed favourites:", parsed);
        return parsed;
      }
    } catch (error) {
      console.error("❌ Error loading localStorage data:", error);
    }

    console.log("📝 No localStorage data, starting with empty array");
    return [];
  });

  // Save to localStorage whenever favourites change
  useEffect(() => {
    console.log("💾 Saving to localStorage:", favourites);
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const addFavMovie = (movie) => {
    console.log("➕ Adding movie to favorites:", movie);
    console.log("🔑 Movie imdbID:", movie.imdbID);

    setFavourites((prev) => {
      console.log("📋 Current favorites:", prev);
      if (prev.some((m) => m.imdbID === movie.imdbID)) {
        console.log("⚠️ Movie already in favorites");
        return prev;
      }
      const updated = [...prev, movie];
      console.log("✨ Updated favorites:", updated);
      return updated;
    });
  };

  const removeFavMovie = (imdbID) => {
    console.log("➖ Removing movie with imdbID:", imdbID);
    setFavourites((prev) => {
      const updated = prev.filter((movie) => movie.imdbID !== imdbID);
      console.log("🗑️ Updated favorites after removal:", updated);
      return updated;
    });
  };

  const isFav = (imdbID) => {
    const result = favourites.some((movie) => movie.imdbID === imdbID);
    console.log(`🤔 Is ${imdbID} favorite?`, result);
    console.log(
      "📝 Current favorites imdbIDs:",
      favourites.map((m) => m.imdbID)
    );
    return result;
  };

  return (
    <MovieContext.Provider
      value={{ favourites, addFavMovie, removeFavMovie, isFav }}
    >
      {children}
    </MovieContext.Provider>
  );
};
