import { useDispatch, useSelector } from "react-redux";
import { addTrailerMovie } from "./movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "./constant";

const useTrailerVideo = (trailerId) => {
  const dispatch = useDispatch();
  const trailerMovie = useSelector((store) => store.movies.trailerMovie);
  // Fetching Movie Trailer API and updating the store
  const getTrailerMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + trailerId + "/videos",
      API_OPTIONS
    );
    const json = await data.json();
    const videoTrailers = json.results.filter(
      (video) => video.type == "Trailer"
    );
    // If more than 1 trailers are present choose 1st
    const videoTrailer = videoTrailers.length
      ? videoTrailers[0]
      : json.results[0];
    dispatch(addTrailerMovie(videoTrailer));
  };

  useEffect(() => {
    !trailerMovie && getTrailerMovie();
  }, []);
};

export default useTrailerVideo;
