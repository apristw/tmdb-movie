import React, { useState } from "react";
import Search from "./Search";
import { useRouter } from "next/router";
import axios from "axios";

function Navigation() {
  const route = useRouter();

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearchMovie = async () => {
    if (query.length > 2) {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/search/movie?query=${query}&api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}`
        );
        console.log(response.data);
        setResults(response.data.results);
      } catch (error) {
        console.error(`error searching movies:`, error);
      }
    }
  };

  const handleChangeSearch = (e) => {
    setQuery(e.target.value);
    if (!e.target.value) {
      setResults([]);
    }
  };

  // console.log(results);

  return (
    <div className="relative">
      <nav className="absolute flex justify-between items-center max-w-[1440px] z-20 left-1/2 transform -translate-x-1/2 w-full py-5 px-4 ">
        <span
          className="text-slate-200 font-bold text-2xl cursor-pointer"
          onClick={() => route.push("/")}
        >
          MovieKita
        </span>
        <Search
          value={query}
          handleChangeSearch={handleChangeSearch}
          clickHandle={handleSearchMovie}
          data={results}
        />
        <div>
          <p className="text-slate-200 font-bold cursor-pointer">Sign In</p>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
