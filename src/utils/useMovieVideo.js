// currently Playing Movie
import { useDispatch, useSelector } from "react-redux";
import { addWatchNowMovies } from "./movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "./constant";

const useMovieVideo = (movieId) => {
  const dispatch = useDispatch();
  const watchNowMovie = useSelector((store) => store.movies.watchNowMovie);
  // Fetching Movie Trailer API and updating the store
  const getWatchNowMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
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
    dispatch(addWatchNowMovies(videoTrailer));
  };

  useEffect(() => {
    getWatchNowMovie();
  }, []);
};

export default useMovieVideo;
