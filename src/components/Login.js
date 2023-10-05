import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  //   Toggle btw sign-in and sign-up form
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_medium.jpg" />
      </div>
      <form className="absolute p-8 bg-black w-3/12 text-white mx-auto my-36 right-0 left-0 bg-opacity-90">
        <h1 className="text-3xl font-semibold my-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-2 my-3 bg-[#333] rounded-sm text-[#8c8c8c]"
          />
        )}

        <input
          type="text"
          placeholder="Email Address"
          className="w-full p-2 my-3 bg-[#333] rounded-sm text-[#8c8c8c]"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 my-3 bg-[#333] rounded-sm text-[#8c8c8c]"
        />
        <button className="w-full bg-[#e50914] font-semibold p-2 rounded-sm my-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-[#737373]">
          {isSignInForm ? "New to Netflix? " : "Already a User? "}
          <span
            onClick={toggleSignInForm}
            className="hover:underline cursor-pointer font-semibold text-white"
          >
            {isSignInForm ? "Sign up now" : "Sign in now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
