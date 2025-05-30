import { LOGO_URL, PROFILE_IMG } from '../utils/constant'
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { isShowGPT } from '../utils/gptStore';

const Header = () => {
  const dispatch = useDispatch()
  const navidate = useNavigate()
  const user = useSelector(store => store.user)
  const gpt = useSelector(store => store.gpt.showGPT)
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, password, displayName, photoURL} = user;
        dispatch(addUser({ uid, email, password, displayName, photoURL }))
        navidate('/browse')
      } else {
        dispatch(removeUser())
        navidate('/')
      }
    });

    return () => {
      unSubscribe()
    }
  }, []);

  const handleProfileClick = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleShowGPT = () => {
    dispatch(isShowGPT())
  }

  const handleSignOut = () => {
    signOut(auth);
    setShowDropdown(false);
  };

  return (
    <div className='absolute bg-gradient-to-b from-black z-10 w-full flex justify-between items-center px-4 py-2'>
      <img alt="Logo_Url" src={LOGO_URL} className="w-48" />
      {user &&
        <div className="relative flex items-center gap-4">
          <button onClick={handleShowGPT}
          className='text-white font-bold bg-green-700 px-4 py-2 rounded-lg'>{gpt === true ? "Open Browse" : "GPT Search"}</button>
          <span className="text-white font-bold">({user?.displayName})</span>
          <img
            alt="Profile Image"
            src={PROFILE_IMG}
            className="w-12 h-12 rounded-lg cursor-pointer"
            onClick={handleProfileClick}
          />
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-32 bg-white rounded shadow-lg z-20">
              <button
                className="block w-full text-left px-4 py-2 text-black hover:bg-gray-200"
                onClick={handleSignOut}
              >
                Sign out
              </button>
            </div>
          )}
        </div>
      }
    </div>
  )
}

export default Header