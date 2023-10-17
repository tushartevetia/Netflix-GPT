import React from "react";
import { MOVIE_POSTER } from "../utils/constant";
import { useNavigate } from "react-router-dom";
import { addWatchNowMovies } from "../utils/movieSlice";

// Contains indivdual movie card details
const MovieCard = ({ posterPath, movieId }) => {
  const navigate = useNavigate();

  if (!posterPath) return null;
  const handlePlayMovie = () => {
    navigate("/movie/" + movieId);
  };

  return (
    <div className="md:w-48 w-28 pr-4">
      <img
        onClick={handlePlayMovie}
        className="min-h-[144px] md:min-h-[264px]"
        alt="Movie Poster"
        src={MOVIE_POSTER + posterPath}
      />
    </div>
  );
};

export default MovieCard;
