import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import useMovieVideo from "../utils/useMovieVideo";

const PlayMovie = () => {
  const [movieInfo, setMovieInfo] = useState("");
  const [toggleInfo, setToggleInfo] = useState(true);
  const movieId = useParams();
  useMovieVideo(movieId?.id);
  const allmovies = useSelector((store) => store.movies);
  const currentPlayingMovie = allmovies.watchNowMovie;

  const handleMovieInfo = () => {
    Object.values(allmovies).map((mov, index) => {
      if (Array.isArray(mov)) {
        return mov.map((info) => {
          if (info.id == movieId?.id) {
            const movinfo = info.overview;
            setMovieInfo(movinfo);
          }
        });
      }
    });
  };
  const toggleMovieInfo = () => {
    console.log(toggleInfo);
    if (toggleInfo) {
      handleMovieInfo();
    } else {
      setMovieInfo(null);
    }
  };
  return (
    <div className="w-full md:p-0 min-h-screen text-white bg-black flex justify-start gap-6 flex-col items-center md:flex-row">
      <iframe
        className="w-full md:aspect-video aspect-square "
        src={
          "https://www.youtube.com/embed/" +
          currentPlayingMovie?.key +
          "?&autoplay=1&mute=1&loop=1&controls=1&showinfo=0&rel=0&&playlist=" +
          currentPlayingMovie?.key
        }
        allowFullScreen
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <div className="text-center md:w-[30%] ">
        <button
          onClick={() => {
            toggleMovieInfo();
            setToggleInfo(!toggleInfo);
          }}
          className="text-white font-medium px-4 bg-gray-700 bg-opacity-80 p-3 align-middle rounded-md mx-auto text-center"
        >
          More info
        </button>
        <p className="text-white p-4">{movieInfo}</p>
      </div>
    </div>
  );
};

export default PlayMovie;
