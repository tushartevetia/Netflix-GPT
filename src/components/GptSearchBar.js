import React, { useRef, useState } from "react";
import { lang } from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constant";
import { addGPTMovieResult } from "../utils/GptSlice";

const GptSearchBar = () => {
  const searchtText = useRef();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  // changing language based on selected value
  const selectedLanguage = useSelector((store) => store.config.lang);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGPTSearchClick = async () => {
    setIsLoading(true);
    // Make an API call To GPT api and get movie reccomendations
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query" +
      searchtText.current.value +
      ". Only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Don, Hulchal, Koi Mil Gaya, Gadar, Sholay";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    if (!gptResults.choices) {
      // Todo: Error Handling
    }

    // Will get the gpt movies reccomendation result and convert it into array of movie names
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    // For Each movie search tmdb api, this will return 5 promises as function above is async
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);
    if (tmdbResults) {
      setIsLoading(false);
    }

    // Storing movie results from tmdb in store
    dispatch(
      addGPTMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <>
      <div className="flex justify-center relative pt-[20%] md:pt-0  ">
        <form
          className="md:w-1/2 mt-[10%] grid grid-cols-12 bg-black bg-opacity-80 w-full "
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchtText}
            type="text"
            className="p-3 md:m-6 m-4 rounded-md bg-slate-100 md:col-span-9 col-span-8  text-black"
            placeholder={lang[selectedLanguage].placeholder}
          ></input>
          <button
            onClick={handleGPTSearchClick}
            disabled={isLoading ? true : false}
            className="py-2 ml-2 px-4 md:m-6 m-4 bg-red-700 rounded-md text-white md:col-span-3 col-span-4 disabled:opacity-60 hover:bg-red-800"
          >
            {isLoading ? "Loading..." : lang[selectedLanguage].search}
          </button>
        </form>
      </div>
    </>
  );
};

export default GptSearchBar;
