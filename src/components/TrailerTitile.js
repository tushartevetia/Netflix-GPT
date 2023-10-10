import React from "react";

const TrailerTitile = ({ title, overview }) => {
  return (
    <div className="px-8 absolute text-white bg-gradient-to-r from-black w-screen aspect-video pt-[18%]">
      <div className="text-4xl font-bold">{title}</div>
      <p className="w-1/4 py-6 text-base">{overview}</p>
      <div>
        <button className="text-black bg-white rounded-md  py-2 px-6  font-medium mr-2 hover:opacity-90">
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
