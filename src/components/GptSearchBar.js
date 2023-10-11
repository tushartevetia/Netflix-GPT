import React from "react";
import { lang } from "../utils/languageConstant";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const selectedLanguage = useSelector((store) => store.config.lang);

  return (
    <div className="flex justify-center relative  ">
      <form className="w-1/2 mt-[10%] grid grid-cols-12 bg-black bg-opacity-80 ">
        <input
          type="text"
          className="p-3 m-6 rounded-md bg-slate-100 col-span-9"
          placeholder={lang[selectedLanguage].placeholder}
        ></input>
        <button className="py-2 ml-2 px-4 m-6 bg-red-700 rounded-md text-white col-span-3 hover:bg-red-800">
          {lang[selectedLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
