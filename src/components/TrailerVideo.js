import React from "react";

import { useSelector } from "react-redux";

import useTrailerVideo from "../utils/useTrailerVideo";

const TrailerVideo = ({ trailerId }) => {
  useTrailerVideo(trailerId);
  const movieTrailer = useSelector((store) => store.movies.trailerMovie);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          movieTrailer?.key +
          "?&autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&&playlist=" +
          movieTrailer?.key
        }
        frameBorder="0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default TrailerVideo;
