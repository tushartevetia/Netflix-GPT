import React from "react";
import Header from "./Header";
import useNowPlayingMoviesFetch from "../utils/useNowPlayingMoviesFetch";
import TrailerContainer from "./TrailerContainer";

const Browse = () => {
  useNowPlayingMoviesFetch();

  return (
    <div>
      <Header />
      <TrailerContainer />
    </div>
  );
};

export default Browse;
