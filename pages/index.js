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

  console.log(results);

  // PR = APLIKASI MASIH BUG. SETIAP INPUTAN DIMASUKAN HALAMAN MASIH REFRESH, SETIAP MOVIE DIPILIH ATAU PILIHAN MOVIE DICLOSE MASIH REFRESH

  const performSearch = async () => {
    if (query.length > 0) {
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
    performSearch();
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

  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    if (!e.target.value) {
      setResults([]);
    }
  };

  return (
    <div className="relative px-5 lg:p-0">
      <Navigation
        handleSelectMovie={handleSelectMovie}
        handleChange={handleChange}
        handleSearchMovie={handleSearchMovie}
        results={results}
        query={query}
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
