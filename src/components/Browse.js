import React from "react";
import Header from "./Header";
import useNowPlayingMoviesFetch from "../utils/useNowPlayingMoviesFetch";
import TrailerContainer from "./TrailerContainer";
import AllVideosContainer from "./AllVideosContainer";
import usePopularMovies from "../utils/usePopularMovies";
import useTopRatedMovies from "../utils/useTopRatedMovies";
import useUpcomingMovies from "../utils/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMoviesFetch();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      <TrailerContainer />
      <AllVideosContainer />
    </div>
  );
};

export default Browse;
