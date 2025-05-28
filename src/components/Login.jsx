import { BG_IMG_URL } from "../utils/constant"
import Header from "./Header"
import { useState, useRef } from "react"
import { validate } from '../utils/validate'

const Login = () => {

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

  const handleEvent = () => {
    let checkValidate = validate(email.current.value, password.current.value)
    console.log(checkValidate)
    if(checkValidate) {
      setError(checkValidate)
    } else {
      clearInputs();
      console.log(checkValidate)

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