import { useDispatch } from "react-redux";
import { API_OPTIONS } from "./constant";
import { addNowPlayingMovies } from "./movieSlice";
import { useEffect } from "react";

const useNowPlayingMoviesFetch = () => {
  const dispatch = useDispatch();

  // Fetch TMDB API movies data and update the store
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);

    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};
export default useNowPlayingMoviesFetch;
