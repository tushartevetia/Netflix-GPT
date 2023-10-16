import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BAKGROUND_URL } from "../utils/constant";

const GPTSearch = () => {
  return (
    <div className="text-white md:pt-0">
      <div className="fixed h-full w-full md:block">
        <img className="h-full object-cover w-full" src={BAKGROUND_URL} />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GPTSearch;
