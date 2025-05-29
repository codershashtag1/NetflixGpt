import { BG_IMG_URL } from "../utils/constant"
import Header from "./Header"
import { useState, useRef } from "react"
import { validate } from '../utils/validate'
import { createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch()
  const [signIn, setSignIn] = useState(true)
  const [error, setError] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const clearInputs = () => {
    if (name.current) name.current.value = "";
    if (email.current) email.current.value = "";
    if (password.current) password.current.value = "";
    setError(null)
  };

  const handleForm = () => {
    setSignIn(!signIn)
    clearInputs();
  }

  const handleEvent = (e) => {
    e.preventDefault()
    let checkValidate = validate(email.current.value, password.current.value)
    if(checkValidate) {
      setError(checkValidate)
    } else {
      if(!signIn) { 
        console.log("Sign Up")
        console.log(name.current.value);
        // let name = 
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            updateProfile(user, {
              displayName: name.current.value, 
              photoURL: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
              
            }).then(() => {
              // /auth.currentUser.reload()
              let updatedUser = auth.currentUser
              console.log(updatedUser)
              dispatch(addUser({
                uid: updatedUser.uid,
                email: updatedUser.email,
                displayName: updatedUser.displayName,
                photoURL: updatedUser.photoURL
              }));
              clearInputs();
            }).catch((error) => {
                setError(error.message)
            });
            // ...
          })
          .catch((error) => {
            setError(error.message)
            // ..
          });
      } else {
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          clearInputs();
        })
        .catch((error) => {
          setError(error.message)
        });
      }
    }
  }

  return (  
    <div>
      <Header />
      <div className="absolute bg-gradient-to-b from-black">
        <img alt="Background_Image" src={BG_IMG_URL} />
      </div>
      <form className="absolute bg-black opacity-85 flex flex-col justify-center p-10 w-3/12 mx-auto right-0 left-0 my-36 gap-8 text-white" onSubmit={(e) => e.preventDefault()}>
        <h1 className="text-4xl font-bold">{signIn ? "Sign In" : "Sign Up"}</h1>
        {!signIn &&  
          <input 
            type="text" 
            ref={name}
            name="userName" 
            placeholder='Name' 
            className='border-2 border-gray-400 focus:border-white focus:outline-none hover:border-white hover:border-4 p-4 rounded-lg bg-black opacity-80 text-white text-2xl placeholder-white'
          />
        }
        <input 
          type="email" 
          ref={email}
          name="email" 
          placeholder='Email Address' 
          className='border-2 border-gray-400 focus:border-white focus:outline-none hover:border-white hover:border-4 p-4 rounded-lg bg-black opacity-80 text-white text-2xl placeholder-white'/>
        <input 
          type="text" 
          ref={password}
          name="passwrd" 
          placeholder='Password' 
          className='border-2 border-gray-400 focus:border-white focus:outline-none hover:border-white hover:border-4 p-4 rounded-lg bg-black opacity-80 text-white text-2xl placeholder-white'
        />
        {error && (<p className="text-red-700 text-1xl p-2">{error}</p>)}
        <input
          type="button"
          className="bg-red-700 px-6 py-2 rounded-lg text-2xl"
          value={signIn ? "Sign In" : "Sign Up"}
          onClick={handleEvent}
        />
        <div className="flex gap-2 text-2xl">
          <p className="text-gray-500">New to Netflix?</p>
          <p className="text-white cursor-pointer hover:underline" onClick={handleForm}>{!signIn ? "Sign In Now" : "Sign up Now"}</p>  
        </div>
      </form>
    </div>  
  )
}
  
export default Login