import { fetchGenres } from "@/pages/api/api";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function CardSearch({
  movieId,
  title,
  rating,
  release,
  genre,
  image,
  handleSelectMovie,
}) {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const dataGenre = async () => {
      const movieGenres = await fetchGenres();

      setGenres(movieGenres);
    };

    dataGenre();
  }, []);


  const movieGenre = genre.map((genre) => {
    const genreObj = genres.find((genObj) => genObj.id === genre);
    return genreObj ? genreObj.name : "";
  });

  const selectMovieId = () => {
    handleSelectMovie(movieId);
  };

  return (
    <div
      className="relative w-full flex h-24 space-x-2 mb-1 hover:bg-slate-600"
      onClick={selectMovieId}
    >
      <div className="relative h-24 w-20">
        {image !== undefined ? (
          <Image
            src={`${process.env.NEXT_PUBLIC_IMG_URL_POSTER}/${image}`}
            alt="foto"
            fill
            sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
            style={{ objectFit: "cover" }}
          />
        ) : (
          "no img"
        )}
      </div>
      <div className="p-1 text-slate-100 overflow-hidden">
        <p className="font-bold w-full truncate">{title}</p>
        <div className="flex gap-1 items-center">
          <span className="px-2 mr-3 font-bold text-slate-800 bg-yellow-500 rounded-md">
            {rating.toFixed(1)}
          </span>
          <p className="text-sm">{release}</p>
        </div>
        <p>{movieGenre.join(", ")}</p>
      </div>
    </div>
  );
}

export default CardSearch;
