import { fetchMovies } from "@/pages/api/api";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Hero({ endpoint }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchDataMovie = async () => {
      const datamovies = await fetchMovies(endpoint);

      setMovies(datamovies);
    };
    fetchDataMovie();
  }, [endpoint]);

  const randomIdx = Math.floor(Math.random() * movies.length);
  const posterMovie = movies[randomIdx] || null;
  // console.log(posterMovie);

  return (
    <>
      {posterMovie !== null && (
        <div className="relative max-w-[1440px] h-[600px] mx-auto">
          <div className="relative">
            <div className="absolute h-[600px] max-w-[1440px] w-full -z-10">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMG_URL}/${posterMovie.backdrop_path}`}
                alt="foto"
                layout="fill"
                objectFit="cover"
                quality={100}
                priority
              />
            </div>
          </div>
          <div className="relative text-slate-100 w-[415px] pt-32 pl-24 p-5">
            <div className="absolute">
              <h1 className="lg:text-5xl font-bold">{posterMovie.title}</h1>
              <p className="py-4 text-sm">{posterMovie.overview}</p>
              <button className="text-sm font-bold py-2 px-3 rounded-md uppercase bg-rose-800 hover:bg-rose-900">
                Watch Trailer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Hero;
