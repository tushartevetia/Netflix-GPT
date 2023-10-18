import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TrailerTitile = ({ title, overview, movieId }) => {
  const navigate = useNavigate();
  const [showInfo, setshowInfo] = useState("hidden");

  const handleShowInfo = () => {
    if (showInfo) {
      setshowInfo("");
    } else {
      setshowInfo("hidden");
    }
  };
  return (
    <div className="md:px-8 absolute text-white bg-gradient-to-r from-black w-full aspect-video md:pt-[18%] pt-[73%]">
      <div className="md:text-4xl px-6 text-2xl font-bold">{title}</div>
      <p
        id="movie-info"
        className={
          "md:w-1/4 md:p-6 py-3 mb-[60px] md:mb-0  text-base  md:mt-0 md:overflow-auto md:max-h-none md:bg-transparent -mt-[210px] px-5  max-h-[158px] min-h-[158px] max-w-[300px] md:max-w-none md:min-h-0 overflow-y-scroll bg-black bg-opacity-40 " +
          showInfo
        }
      >
        {overview}
      </p>
      <div className="md:mt-6 mt-2 px-6">
        <button
          onClick={() => {
            navigate("/movie/" + movieId);
          }}
          className="text-black bg-white rounded-md  py-2 px-6 mr-6  font-medium md:mr-2 hover:opacity-90"
        >
          <img
            className="w-4 mr-1 inline"
            src="https://cdn-icons-png.flaticon.com/512/54/54377.png"
          />{" "}
          Play
        </button>
        <button
          onClick={handleShowInfo}
          className=" bg-gray-500 rounded-md text-white bg-opacity-70 font-medium py-2 px-6"
        >
          <img className="w-6 inline" src="" /> More Info
        </button>
      </div>
    </div>
  );
};

export default TrailerTitile;
