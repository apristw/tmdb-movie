import Image from "next/image";
import React from "react";
import genreMovie from "../utils/genre";

function Card({ title, release_date, genre, image }) {
  const genreList = genreMovie;
  console.log(genreMovie);

  return (
    <>
      <div className="h-[490px] w-[250px] cursor-pointer scale-95 hover:scale-100 transition-all duration-200 ease-in-out">
        <div className="relative max-w-[250px] w-full h-[370px]">
          <Image
            src={`${process.env.NEXT_PUBLIC_IMG_URL_POSTER}/${image}`}
            alt="foto"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
        </div>
        <div className="">
          <p className="text-sm text-gray-400 py-2">{release_date}</p>
          <p className="font-bold mb-2">{title}</p>
          <p>{genre}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
