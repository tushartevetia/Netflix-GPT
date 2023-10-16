import React from "react";
import { MOVIE_POSTER } from "../utils/constant";

// Contains indivdual movie card details
const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="md:w-48 w-28 pr-4">
      <img
        className="min-h-[144px] md:min-h-[264px]"
        alt="Movie Poster"
        src={MOVIE_POSTER + posterPath}
      />
    </div>
  );
};

export default MovieCard;
