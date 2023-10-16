import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const AllVideosContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="z-20 pb-5 md:pb-0 relative md:-top-[110px] bg-transparent">
      <MovieList
        titleCategory={"Now Playing"}
        movies={movies.nowPlayingMovies}
      />
      <MovieList titleCategory={"Top Rated"} movies={movies.topRatedMovies} />
      <MovieList titleCategory={"Popular"} movies={movies.popularMovies} />
      <MovieList titleCategory={"Upcoming"} movies={movies.upcomingMovies} />
    </div>
  );
};

export default AllVideosContainer;
