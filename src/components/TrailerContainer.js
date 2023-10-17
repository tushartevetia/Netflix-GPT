import React from "react";
import TrailerTitile from "./TrailerTitile";
import TrailerVideo from "./TrailerVideo";
import { useSelector } from "react-redux";

const TrailerContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  const trailerMovie = movies[0];
  const { title, overview, id } = trailerMovie;
  return (
    <div>
      <TrailerTitile title={title} overview={overview} />
      <TrailerVideo trailerId={id} />
    </div>
  );
};

export default TrailerContainer;
