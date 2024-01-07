import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import MovieSlider from "@/components/MovieSlider";
import DetailMovie from "@/components/DetailMovie";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDebounce } from "use-debounce";

export default function Home() {
  const [idSelected, setIdSelected] = useState(null);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const [queryDebounce] = useDebounce(query, 1000);

  const performSearch = async () => {
    if (queryDebounce.length > 0) {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/search/movie?query=${queryDebounce}&api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}`
        );
        setResults(response.data.results);
      } catch (error) {
        console.error(`error searching movies:`, error);
      }
    }
  };

  useEffect(() => {
    if (queryDebounce.length > 0) {
      performSearch();
    } else {
      setResults([]);
    }
  }, [queryDebounce]);

  const handleSelectMovie = (movieId) => {
    setIdSelected(movieId);
    setResults([]);
  };

  const handleSearchMovie = () => {
    performSearch();
  };

  const handleCloseModals = () => {
    setIdSelected(null);
  };

  const handleChange = (event) => {
    event.preventDefault();
    setQuery(event.target.value);
  };

  return (
    <div className="relative px-5 lg:p-0">
      <Navigation
        handleSelectMovie={handleSelectMovie}
        handleChange={handleChange}
        handleSearchMovie={handleSearchMovie}
        results={results}
        query={query}
        queryDebounce={queryDebounce}
      />
      <Hero endpoint={`/movie/popular`} />
      <MovieSlider
        endpoint={`/movie/popular`}
        title={"Popular Movie"}
        handleSelectMovie={handleSelectMovie}
      />
      <MovieSlider
        endpoint={`/trending/movie/day`}
        title={"Trending Today"}
        handleSelectMovie={handleSelectMovie}
      />
      <MovieSlider
        endpoint={`/movie/top_rated`}
        title={"Top Rated"}
        handleSelectMovie={handleSelectMovie}
      />
      <DetailMovie idSelected={idSelected} onClose={handleCloseModals} />
    </div>
  );
}
