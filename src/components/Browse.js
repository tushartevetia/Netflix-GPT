import React from "react";
import Header from "./Header";
import useNowPlayingMoviesFetch from "../utils/useNowPlayingMoviesFetch";
import TrailerContainer from "./TrailerContainer";
import AllVideosContainer from "./AllVideosContainer";
import usePopularMovies from "../utils/usePopularMovies";
import useTopRatedMovies from "../utils/useTopRatedMovies";
import useUpcomingMovies from "../utils/useUpcomingMovies";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGpt = useSelector((store) => store.gpt.showGPTSearch);

  useNowPlayingMoviesFetch();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {showGpt ? (
        <GPTSearch />
      ) : (
        <>
          <TrailerContainer />
          <AllVideosContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
