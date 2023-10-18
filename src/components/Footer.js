import React from "react";
import search from "../images/search_icon.png";
import homeIcon from "../images/home-icon.png";
import { BAKGROUND_URL } from "../utils/constant";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleGPTSearchView } from "../utils/GptSlice";

const Footer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className=" rounded-t-md px-4 fixed flex justify-around bottom-0 right-0 left-0 md:hidden">
      <div className="absolute md:h-full md:w-full md:block">
        <img className="md:h-full blur-md md:w-full" src={BAKGROUND_URL} />
      </div>
      <button
        onClick={() => {
          navigate("/browse");
        }}
        className=" p-3 z-10 active:scale-125   rounded-md "
      >
        <img className="w-7" src={homeIcon} />
      </button>
      <button
        onClick={() => {
          dispatch(toggleGPTSearchView());
          navigate("/browse");
        }}
        className="p-3 z-10 active:scale-125 rounded-md "
      >
        <img className="w-7" src={search} />
      </button>
    </div>
  );
};

export default Footer;
