import React from "react";
import { MOVIE_POSTER } from "../utils/constant";

// Contains indivdual movie card details
const MovieCard = ({ posterPath }) => {
  return (
    <div className="md:w-48 w-28 pr-4">
      <img alt="Movie Poster" src={MOVIE_POSTER + posterPath} />
    </div>
  );
};

export default MovieCard;
