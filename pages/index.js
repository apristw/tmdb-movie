import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import MovieSlider from "@/components/MovieSlider";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero endpoint={`/movie/popular`} />
      <MovieSlider endpoint={`/movie/popular`} title={"Popular Movie"} />
      <MovieSlider endpoint={`/trending/movie/day`} title={"Trending Today"} />
      <MovieSlider endpoint={`/movie/top_rated`} title={"Top Rated"} />
    </>
  );
}
