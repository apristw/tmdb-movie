// api.js
import axios from "axios";

export const fetchMovies = async (endpoint) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}${endpoint}`,
      {
        params: {
          api_key: process.env.NEXT_PUBLIC_TMDB_KEY,
        },
      }
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

export const fetchGenres = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/genre/movie/list`,
      {
        params: {
          api_key: process.env.NEXT_PUBLIC_TMDB_KEY,
        },
      }
    );
    return response.data.genres;
  } catch (error) {
    console.error("Error fetching genres:", error);
    return [];
  }
};
