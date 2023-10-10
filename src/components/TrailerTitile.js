import React from "react";

const TrailerTitile = ({ title, overview }) => {
  return (
    <div className="px-8 absolute text-white bg-gradient-to-r from-black w-full aspect-video md:pt-[18%] pt-[73%]">
      <div className="md:text-4xl text-2xl font-bold">{title}</div>
      <p className="md:w-1/4 py-6 text-base hidden md:block">{overview}</p>
      <div className="mt-3">
        <button className="text-black bg-white rounded-md  py-2 px-6 mr-6  font-medium md:mr-2 hover:opacity-90">
          <img
            className="w-4 mr-1 inline"
            src="https://cdn-icons-png.flaticon.com/512/54/54377.png"
          />{" "}
          Play
        </button>
        <button className=" bg-gray-500 rounded-md text-white bg-opacity-70 font-medium py-2 px-6">
          <img className="w-6 inline" src="" /> More Info
        </button>
      </div>
    </div>
  );
};

export default TrailerTitile;
