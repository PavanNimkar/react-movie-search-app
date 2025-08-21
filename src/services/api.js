const API_KEY = "your api key";
const BASE_URL = "http://www.omdbapi.com/";

const popular = ["The Shawshank Redemption"];

export const getPopularMovies = async () => {
  let movies = [];

  for (let title of popular) {
    const res = await fetch(
      `${BASE_URL}?apikey=${API_KEY}&t=${encodeURIComponent(title)}`
    );
    const data = await res.json();
    // console.log(data);

    movies.push(data);
  }

  return movies;
};
export const searchQueryResults = async (query) => {
  const res = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}`
  );
  const data = await res.json();

  return data;
};
