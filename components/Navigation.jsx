import React from "react";
import Search from "./Search";
import { useRouter } from "next/router";

function Navigation({
  handleSelectMovie,
  results,
  handleSearchMovie,
  handleChange,
  query,
  queryDebounce,
  setQuery,
}) {
  const route = useRouter();

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
          handleChange={handleChange}
          handleSearchMovie={handleSearchMovie}
          data={results}
          handleSelectMovie={handleSelectMovie}
          queryDebounce={queryDebounce}
          setQuery={setQuery}
        />
        <div>
          <p className="text-slate-200 font-bold cursor-pointer">Login</p>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
