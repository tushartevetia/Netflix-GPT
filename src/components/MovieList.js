import React from "react";
import MovieCard from "./MovieCard";
// Contains the List of all movies in a row
const MovieList = ({ titleCategory, movies }) => {
  return (
    <div className="py-2 pr-2 pl-8 mb-4 md:mb-0">
      <p className="md:text-3xl pb-3 text-white text-xl">{titleCategory}</p>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex ">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
