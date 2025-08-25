import { useEffect, useState } from "react";
import { getPopularMovies, searchQueryResults } from "../services/api";
import MovieCard from "../components/MovieCard";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [searching, setSearching] = useState(false);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const loadPopularMovies = async () => {
      setSearching(false);
      try {
        const displayMovies = await getPopularMovies();
        setMovies(displayMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;
    setSearching(true);
    setLoading(true);

    try {
      const searchResults = await searchQueryResults(searchQuery);
      searchResults.Response == "False"
        ? setNotFound(true)
        : setNotFound(false);

      setMovies(searchResults.Search);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to load movie");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-[4rem]">
      <div className="form-container flex justify-center items-center mt-[5%] px-4">
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-2xl bg-white rounded-lg overflow-hidden"
          name="movie-search-form"
        >
          <input
            type="text"
            className="flex-1 text-black placeholder-gray-400 outline-none py-3 px-3 text-base sm:text-lg font-medium"
            placeholder="Search for your favourite Movies, TV Shows..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="bg-red-600 hover:bg-red-700 text-white px-5 sm:px-8 py-3 sm:py-4 font-semibold transition-all duration-200 hover:scale-105 active:scale-95 flex items-center space-x-2 m-1 rounded-full"
            type="submit"
          >
            <span className="hidden sm:inline">Search</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </form>
      </div>

      {searching ? (
        <h2 className="text-2xl font-bold m-4 text-center">Your Movie</h2>
      ) : (
        <h2 className="text-2xl font-bold m-4 text-center">Popular Movies</h2>
      )}
      {error && (
        <div
          className="flex items-center gap-2 rounded-lg border border-red-400 bg-red-100 px-4 py-3 text-red-700"
          role="alert"
        >
          <svg
            className="h-5 w-5 text-red-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 9v2m0 4h.01M21 12A9 9 0 113 12a9 9 0 0118 0z"
            />
          </svg>
          <span>Something went wrong. Please try again.</span>
        </div>
      )}
      {loading == true ? (
        <div
          className="flex items-center justify-center gap-2 h-20"
          role="status"
          aria-label="Loading"
        >
          <span className="h-3 w-3 rounded-full bg-red-600 animate-bounce [animation-delay:-0.3s]"></span>
          <span className="h-3 w-3 rounded-full bg-red-600 animate-bounce [animation-delay:-0.15s]"></span>
          <span className="h-3 w-3 rounded-full bg-red-600 animate-bounce"></span>
        </div>
      ) : !notFound ? (
        <div className="movies-container flex flex-wrap justify-start items-center w-full">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="max-w-md mx-auto p-4 sm:p-6 bg-black border border-red-500/30 rounded-2xl shadow-lg flex flex-col sm:flex-row items-start gap-5">
          {/* Icon */}
          <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-red-500/10">
            <svg
              className="w-8 h-8 text-red-500"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M10 6h8M10 12h6M10 18h8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="5.5"
                cy="12"
                r="3.5"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="text-red-400 text-lg sm:text-2xl font-bold">
              Movie not found
            </h3>

            <p className="mt-2 text-sm sm:text-base text-red-300/90 leading-relaxed">
              We couldn't find the movie you're looking for. It may have been
              removed or the ID is incorrect.
            </p>

            {/* Buttons */}
            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => window.location.reload()}
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2 rounded-xl text-sm font-medium text-black bg-red-500 hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-300 transition"
              >
                🔄 Try Again
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
