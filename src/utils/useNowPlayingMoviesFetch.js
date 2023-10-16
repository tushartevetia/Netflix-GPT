import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "./constant";
import { addNowPlayingMovies } from "./movieSlice";
import { useEffect } from "react";

const useNowPlayingMoviesFetch = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  // Fetch TMDB API movies data and update the store
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);
};
export default useNowPlayingMoviesFetch;
