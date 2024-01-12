import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import MovieSlider from "@/components/MovieSlider";
import DetailMovie from "@/components/DetailMovie";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDebounce } from "use-debounce";
import Footer from "@/components/Footer";
import VideoPlayer from "@/components/VideoPlayer";
import { fetchVideoKey } from "./api/api";

export default function Home() {
  const [idSelected, setIdSelected] = useState(null);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [generatedKey, setGeneratedKey] = useState(null);

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

  useEffect(() => {
    if (!generatedKey) {
      return;
    }
    const fetchVideo = async () => {
      const videoKey = await fetchVideoKey(generatedKey);
      if (videoKey && videoKey.length > 0 && videoKey[0].key) {
        setGeneratedKey(videoKey[0].key);
      } else {
        console.error("Data Key Belum Diambil");
      }
    };
    fetchVideo();
  }, [generatedKey]);

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

  const handleCloseVideo = () => {
    setGeneratedKey(null);
  };

  const handleChange = (event) => {
    event.preventDefault();
    setQuery(event.target.value);
  };

  return (
    <div className="relative">
      <Navigation
        handleSelectMovie={handleSelectMovie}
        handleChange={handleChange}
        handleSearchMovie={handleSearchMovie}
        results={results}
        query={query}
        queryDebounce={queryDebounce}
        setQuery={setQuery}
      />
      <Hero endpoint={`/movie/popular`} setKeyVideo={setGeneratedKey} />
      <MovieSlider
        endpoint={`/movie/popular`}
        title={"Popular Movie"}
        handleSelectMovie={handleSelectMovie}
        setKeyVideo={setGeneratedKey}
      />
      <MovieSlider
        endpoint={`/trending/movie/day`}
        title={"Trending Today"}
        handleSelectMovie={handleSelectMovie}
        setKeyVideo={setGeneratedKey}
      />
      <MovieSlider
        endpoint={`/movie/top_rated`}
        title={"Top Rated"}
        handleSelectMovie={handleSelectMovie}
        setKeyVideo={setGeneratedKey}
      />
      <DetailMovie
        idSelected={idSelected}
        onClose={handleCloseModals}
        setKeyVideo={setGeneratedKey}
      />
      <VideoPlayer movieId={generatedKey} onClose={handleCloseVideo} />
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
}
