import Image from "next/image";
import React from "react";
import DetailMovie from "./DetailMovie";
import CardSearch from "./CardSearch";

function SearchResults({ data, handleSelectMovie }) {
  const sortedData = data.sort((a, b) => b.vote_average - a.vote_average);

  return (
    <div className="absolute bg-slate-500 max-h-96 overflow-y-scroll w-full p-0 top-9">
      {sortedData !== 0 &&
        sortedData.map((movie, index) => {
          return (
            <CardSearch
              movieId={movie.id}
              title={movie.original_title}
              rating={movie.vote_average}
              genre={movie.genre_ids}
              image={movie.poster_path}
              release={movie.release_date}
              key={index}
              handleSelectMovie={handleSelectMovie}
            />
          );
        })}
    </div>
  );
}

export default SearchResults;
