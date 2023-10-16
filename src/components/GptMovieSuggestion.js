import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const gpt = useSelector((store) => store.gpt);
  const { movieResults, movieNames } = gpt;
  if (!movieNames) return null;

  return (
    <div className="bg-black z-10 relative pt-4 mt-4 bg-opacity-90">
      <div className="pb-6 pt-4">
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            titleCategory={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
