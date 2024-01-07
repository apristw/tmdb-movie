import { fetchMovies } from "@/pages/api/api";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import CardHero from "./CardHero";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Hero({ endpoint }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchDataMovie = async () => {
      const datamovies = await fetchMovies(endpoint);

      setMovies(datamovies);
    };
    fetchDataMovie();
  }, [endpoint]);

  const settings = {
    arrow: true,
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
            return <CardHero movies={movie} key={index} />;
          })}
        </Slider>
      )}
    </>
  );
}

export default Hero;
