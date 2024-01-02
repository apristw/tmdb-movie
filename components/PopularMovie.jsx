import Image from "next/image";
import React from "react";
import Card from "./Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PopularMovie({ data }) {
  if (!data || data.length === 0) {
    return null;
  }
  const popularMovies = data;

  const settings = {
    // dots: false,
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
        <h2 className="font-bold mt-16 mb-11 text-4xl">Popular Movie</h2>
        <p className="font-bold text-xl text-rose-700 mt-16 mb-11 cursor-pointer">
          See More &gt;{" "}
        </p>
      </div>
      <Slider {...settings}>
        {popularMovies.map((res, index) => {
          return (
            <Card
              title={res.title}
              release_date={res.release_date}
              genre={res.genre_ids}
              image={res.poster_path}
              rating={res.vote_average}
              key={index}
            />
          );
        })}
      </Slider>
    </div>
  );
}

export default PopularMovie;
