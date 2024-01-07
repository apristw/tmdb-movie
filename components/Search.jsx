import React, { useState } from "react";
import SearchResults from "./SearchResults";

function Search({
  value,
  handleChange,
  handleSearchMovie,
  data,
  handleSelectMovie,
  queryDebounce,
}) {
  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  return (
    <div className="relative max-w-xl w-full mx-2 z-20 flex items-center bg-transparent border-2 rounded-md ">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="What do you want to watch?"
        className="w-full text-slate-100 font-bold py-1 pl-2 pr-8 bg-transparent border-none rounded-md focus:bg-slate-500 focus:border-none focus:outline-none"
        onKeyUp={handleSearchMovie}
      />
      <span className="absolute right-0 px-2 cursor-pointer hover:scale-105">
        <svg
          width={20}
          height={20}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 19L13 13M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z"
            stroke="#F3F4F6"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {isFocus && (
        <SearchResults
          data={data}
          handleSelectMovie={handleSelectMovie}
          queryDebounce={queryDebounce}
        />
      )}
    </div>
  );
}

export default Search;
