import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

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
  return (
    <div className="w-screen px-5 md:px-8 py-4 absolute md:bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img className="w-24 md:w-40 " src={LOGO_URL}></img>
      {user && (
        <div className="flex gap-4">
          <img className="w-10" src={user?.photoURL} />

          <div
            onClick={handleSignOut}
            className=" bg-red-600 p-2 px-3 rounded-md font-semibold text-white cursor-pointer hover:bg-red-700"
          >
            Sign Out
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
