import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMoviesFetch from "../utils/useNowPlayingMoviesFetch";
import TrailerContainer from "./TrailerContainer";
import AllVideosContainer from "./AllVideosContainer";
import usePopularMovies from "../utils/usePopularMovies";
import useTopRatedMovies from "../utils/useTopRatedMovies";
import useUpcomingMovies from "../utils/useUpcomingMovies";
import GPTSearch from "./GPTSearch";
import { useDispatch, useSelector } from "react-redux";
import { removeWatchNowMovies } from "../utils/movieSlice";

const Browse = () => {
  const showGpt = useSelector((store) => store.gpt.showGPTSearch);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(removeWatchNowMovies());
  }, []);

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
