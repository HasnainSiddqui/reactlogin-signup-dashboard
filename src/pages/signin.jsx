import { useState } from "react"
import { useNavigate } from "react-router"
import { login } from "../config/appRouter/firebase/firebaseFunction"
import { useContext } from "react"
import { Context } from "../context/contextState"

export let Signin = () => {

  let navigate = useNavigate()

  let {userSingIN , setUserSignIn} = useContext(Context)

  let [user, setUser] = useState({})


  let userSignIn = () => {
    login(user).then((res) => {
  setUserSignIn(true) 
  navigate('/')   

    }).catch(err => {
      console.log(err);

    })
  }


  return (
    <>
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col mx-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 className="text-blue-600 text-xl mx-auto mb-1 font-medium  font-bold title-font">
            SIGN IN
          </h2>


          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>

          <div className="relative mb-4">
            <label htmlFor="password" className="leading-7 text-sm text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>

          <button onClick={userSignIn} className="text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            SignIn
          </button>
          <h1 className="text-center text-gray-500 my-4">You Don,t have an account ?   <span onClick={() => navigate('/signup')} className="text-blue-500 cursor-pointer">sign Up</span></h1>
        </div>
      </div>
    </>
  )
} 