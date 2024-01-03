import Image from "next/image";
import React from "react";

function Card({ title, release_date, genres, genre_ids, image, rating }) {
  const movieGenres = genre_ids.map((genreId) => {
    const genreObj = genres.find((item) => item.id === genreId);
    return genreObj ? genreObj.name : "";
  });

  return (
    <>
      <div className="max-h-[490px] max-w-[250px] cursor-pointer scale-[98%] hover:scale-[100%] transition-all duration-200 ease-in-out">
        <div className="relative max-w-[250px] w-full h-[370px]">
          <Image
            src={`${process.env.NEXT_PUBLIC_IMG_URL_POSTER}/${image}`}
            alt="foto"
            fill
            sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
            style={{ objectFit: "cover" }}
            quality={100}
            priority
          />
        </div>
        <div className="relative">
          <p className="absolute right-0 mt-1 py-1 px-3 font-bold text-sm rounded-md bg-yellow-500">
            {rating.toFixed(1)}
          </p>
          <p className="text-sm text-gray-400 py-2">{release_date}</p>
          <p className="font-bold mb-2">{title}</p>
          <p className="text-sm text-gray-400">{movieGenres.join(", ")}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
