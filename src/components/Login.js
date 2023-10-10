import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateLoginForm } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { DEFAULT_USER_AVATAR } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const email = useRef();
  const password = useRef();
  const name = useRef();
  const dispatch = useDispatch();

  //   Toggle btw sign-in and sign-up form
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  //   Handling Form Validation
  const handleLoginForm = () => {
    const errorMsg = validateLoginForm(
      email.current.value,
      password.current.value
    );
    setErrorMessage(errorMsg);
    if (errorMsg) return;

    if (isSignInForm) {
      // Sign IN User
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage("Please check your Credentials & Try Again.");
        });
    } else {
      // SIGN UP New User
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          // Updating Profile once user signs up
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: DEFAULT_USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  displayName: displayName,
                  email: email,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage("Something went Wrong? Please Try Again");
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage("Something went wrong! Please try again");
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute md:h-full md:w-full hidden md:block">
        <img
          className="md:h-full md:w-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-8 bg-black w-full md:w-3/12 md:min-w-[350px] h-full md:h-auto text-white mx-auto md:my-36 right-0 left-0 md:bg-opacity-90"
      >
        <h1 className="text-3xl font-semibold my-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="w-full p-2 my-3 bg-[#333] rounded-sm text-[#8c8c8c]"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="w-full p-2 my-3 bg-[#333] rounded-sm text-[#8c8c8c]"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="w-full p-2 my-3 bg-[#333] rounded-sm text-[#8c8c8c]"
        />
        {errorMessage && <p className="text-[#e87c03]">{errorMessage}</p>}
        <button
          onClick={handleLoginForm}
          className="w-full bg-[#e50914] font-semibold p-2 rounded-sm my-6"
        >
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
