import React from "react";
import CardSearch from "./CardSearch";

function SearchResults({ data, handleSelectMovie }) {
  const sortedData = data.sort((a, b) => b.vote_average - a.vote_average);

  // console.log({ sortedData });

  return (
    <div className="absolute bg-slate-500 max-h-96 overflow-y-scroll w-full p-0 top-9">
      {sortedData.length > 0 ? (
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
        })
      ) : (
        <p className="px-4 py-2 text-slate-200">
          {sortedData.length === 0 ? "No Movie Found." : "Loading..."}
        </p>
      )}
    </div>
  );
}

export default SearchResults;
