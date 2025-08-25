const API_KEY = "1a80e377";
const BASE_URL = "http://www.omdbapi.com/";

// fallback movie list
const popular = [
  "The Shawshank Redemption",
  "The Godfather",
  "The Dark Knight",
  "The Godfather Part II",
  "12 Angry Men",
  "Schindler's List",
  "The Lord of the Rings: The Return of the King",
  "Pulp Fiction",
  "The Good, the Bad and the Ugly",
  "The Lord of the Rings: The Fellowship of the Ring",
  "Fight Club",
  "Forrest Gump",
  "Inception",
  "The Lord of the Rings: The Two Towers",
  "Star Wars: Episode V - The Empire Strikes Back",
  "The Matrix",
  "Goodfellas",
  "One Flew Over the Cuckoo's Nest",
  "Seven Samurai",
  "Se7en",
  "The Silence of the Lambs",
  "City of God",
  "Life Is Beautiful",
  "It's a Wonderful Life",
];

// Normalize movie objects so everything has same shape
export const normalizeMovie = (movie) => ({
  // Use imdbID as the main ID - it's unique and persistent
  id: movie.imdbID,
  imdbID: movie.imdbID,
  Title: movie.Title,
  Year: movie.Year,
  Poster: movie.Poster,
  Type: movie.Type,
});

// Fetch popular movies list
export const getPopularMovies = async () => {
  let movies = [];

  for (let title of popular) {
    try {
      const res = await fetch(
        `${BASE_URL}?apikey=${API_KEY}&t=${encodeURIComponent(title)}`
      );
      const data = await res.json();

      if (data.Response === "True") {
        movies.push(normalizeMovie(data));
      }
    } catch (error) {
      console.error("Error fetching movie:", title, error);
    }
  }

  return movies;
};

// Fetch search results
export const searchQueryResults = async (query) => {
  try {
    const res = await fetch(
      `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}`
    );
    const data = await res.json();

    if (data.Response === "True" && data.Search) {
      return data.Search.map(normalizeMovie);
    }

    return [];
  } catch (error) {
    console.error("Error fetching search results:", error);
    return [];
  }
};
