import Image from "next/image";
import React from "react";
import Card from "./Card";
import { Slide } from "react-slideshow-image";

function PopularMovie({ data }) {
  if (!data || data.length === 0) {
    return console.log("no data");
  }
  const popularMovie = data;

  console.log(popularMovie);
  return (
    <div className="max-w-[1440px]  mx-auto">
      <div className="flex justify-between">
        <h2 className="font-bold mt-16 mb-11 text-4xl">Popular Movie</h2>
        <p className="font-bold text-xl text-rose-700 mt-16 mb-11 cursor-pointer">
          See More &gt;{" "}
        </p>
      </div>
      <div className="flex flex-row gap-20 overflow-hidden flex-wrap">
        {popularMovie.map((res, index) => {
          return (
            <Card
              title={res.title}
              release_date={res.release_date}
              genre={res.genre_ids}
              image={res.poster_path}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PopularMovie;
