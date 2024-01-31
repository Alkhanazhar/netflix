import React, { useEffect } from "react";
import { Logo } from "../utils/Icons";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../store/appSlice";
import { toggleGptSlice } from "../store/GptSearch";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const gpt = useSelector((store) => store.gpt.gptSearch);

  const user = useSelector((store) => store.user);
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid: uid, displayName: displayName, email: email }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // return unsubscribe();
  }, []);
  return (
    <div className="absolute w-full bg-gradient-to-b from-[#00000069] flex justify-between items-center z-50">
      <div>
        <Logo />
      </div>
      {user && (
        <div className="px-6 py-2">
          <button
            className="bg-[#d81f26] hover:bg-opacity-80 border border-l text-white p-2"
            onClick={() => dispatch(toggleGptSlice())}
          >
            {!gpt ? "Gpt-search" : "Homepage"}
          </button>
          <button
            onClick={handleLogOut}
            className="ms-2 border border-l text-white p-2"
          >
            sign-out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
