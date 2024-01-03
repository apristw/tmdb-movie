import Image from "next/image";
import React from "react";

function SearchResults({ data }) {
  const sortedData = data.sort((a, b) => b.vote_average - a.vote_average);

  return (
    <div className="absolute bg-slate-500 max-h-96 overflow-y-scroll w-full p-0 top-9">
      {sortedData !== 0 &&
        sortedData.map((movie, index) => {
          return (
            <div
              key={index}
              className="w-full flex h-24 space-x-2 mb-1 hover:bg-slate-600"
            >
              <div className="relative h-24 w-20">
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMG_URL_POSTER}/${movie.poster_path}`}
                  alt="foto"
                  fill
                  sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-1 text-slate-100">
                <p className="font-bold">{movie.original_title}</p>
                <div className="flex gap-1 items-center">
                  <span className="px-2 mr-3 font-bold text-slate-800 bg-yellow-500 rounded-md">
                    {movie.vote_average.toFixed(1)}
                  </span>
                  <p className="text-sm">{movie.release_date}</p>
                </div>
                <p>genre</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default SearchResults;
