import { fetchMovies } from "@/pages/api/api";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import CardHero from "./CardHero";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Hero({ endpoint, setKeyVideo }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchDataMovie = async () => {
      const datamovies = await fetchMovies(endpoint);

      setMovies(datamovies);
    };
    fetchDataMovie();
  }, [endpoint]);

  const settings = {
    arrows: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  return (
    <>
      {movies !== null && (
        <Slider {...settings}>
          {movies.map((movie, index) => {
            return (
              <CardHero
                key={index}
                movieId={movie.id}
                image={movie.backdrop_path}
                title={movie.title}
                overview={movie.overview}
                setKeyVideo={setKeyVideo}
              />
            );
          })}
        </Slider>
      )}
    </>
  );
}

export default Hero;
