import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import axios from "axios";
import { useEffect, useState } from "react";
import PopularMovie from "@/components/PopularMovie";
import Card from "@/components/Card";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/popular`, {
        params: {
          api_key: process.env.NEXT_PUBLIC_TMDB_KEY,
        },
      })
      .then((response) => {
        // console.log(response.data.results);
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <Navigation />
      <Hero data={movies} />
      <PopularMovie data={movies} />
      {/* <Card /> */}
      {/* {movies.map((data, index) => {
        return <p key={index}>{data.title}</p>;
      })} */}
    </>
  );
}
