import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL, SUPPORTED_LANGUAGES } from "../utils/constant";
import { toggleGPTSearchView } from "../utils/GptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

  useEffect(() => {
    // Firebase Function to check user loggedin and logout status and redirect accordigly + restricting user from navigating to other urls manually
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // user signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            displayName: displayName,
            email: email,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unsubscribe onAuth state change callback to prevent event listners chaining when component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  const handleSignOut = () => {
    // Firebase user signout tracking
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  // Handle GPT Search component hide and show
  const handleGPTSearch = () => {
    dispatch(toggleGPTSearchView());
  };
  // Handle Language change feature
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="w-full px-5 md:px-8 py-4 absolute bg-gradient-to-b from-black z-10 flex flex-row md:flex-row gap-4 justify-between items-center">
      <img className="w-24 md:w-40 " src={LOGO_URL}></img>
      {user && (
        <div className="flex gap-4">
          {showGPTSearch && (
            <select
              onChange={handleLanguageChange}
              className="bg-gray-800 text-white m-2 p-1"
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option
                  className="text-sm p-1"
                  key={lang.identifier}
                  value={lang.identifier}
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            onClick={handleGPTSearch}
            className="bg-purple-900 px-2 py-1 m-1 text-white rounded-md font-medium"
          >
            {showGPTSearch ? "Home" : "GPT Search"}
          </button>
          <img className="w-12 hidden md:block" src={user?.photoURL} />
          {!showGPTSearch && (
            <div
              onClick={handleSignOut}
              className=" bg-red-600 p-2 px-3 m-1 rounded-md font-semibold text-white cursor-pointer hover:bg-red-700"
            >
              Sign Out
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
