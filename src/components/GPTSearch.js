import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BAKGROUND_URL } from "../utils/constant";

const GPTSearch = () => {
  return (
    <div className="text-white">
      <div className="absolute md:h-full md:w-full hidden md:block">
        <img className="md:h-full md:w-full" src={BAKGROUND_URL} />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GPTSearch;
