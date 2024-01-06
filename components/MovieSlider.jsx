import React from "react";
import Card from "./Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchGenres, fetchMovies } from "@/pages/api/api";
import { useEffect } from "react";
import { useState } from "react";

function MovieSlider({ apiKey, endpoint, title, handleSelectMovie }) {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const movieList = await fetchMovies(endpoint);
      const movieGenres = await fetchGenres(apiKey);
      setMovies(movieList);
      setGenres(movieGenres);
    };

    fetchData();
  }, [apiKey, endpoint]);

  //Settings For Slider
  const settings = {
    arrow: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="max-w-[1440px]  mx-auto">
      <div className="flex justify-between">
        <h2 className="font-bold mt-16 mb-11 text-4xl">{title}</h2>
        <p className="font-bold text-xl text-rose-700 mt-16 mb-11 cursor-pointer">
          See More &gt;{" "}
        </p>
      </div>
      <Slider {...settings}>
        {movies.map((res, index) => {
          return (
            <Card
              movieId={res.id}
              title={res.title}
              release_date={res.release_date}
              genre_ids={res.genre_ids}
              genres={genres}
              image={res.poster_path}
              rating={res.vote_average}
              key={index}
              handleSelectMovie={handleSelectMovie}
            />
          );
        })}
      </Slider>
    </div>
  );
}

export default MovieSlider;
