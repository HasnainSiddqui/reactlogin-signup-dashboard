import { useContext, useState } from "react";
import { FaHome,FaSearch } from "react-icons/fa";
import { IoMdPeople ,IoMdNotifications , IoMdArrowDropdown } from "react-icons/io";
import { BsSuitcaseLgFill } from "react-icons/bs";
import { BiSolidMessageDetail } from "react-icons/bi";
import { MdDashboardCustomize } from "react-icons/md";
import { Context } from "../context/contextState";
import { Link } from "react-router-dom";
import { userSignOut } from "../config/appRouter/firebase/firebaseFunction";

// Toastify Code
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export let Header = () =>{


let {userSingIN , setUserSignIn} = useContext(Context)

let [hover , setHover] = useState("/")



let userSingOut =() => {
  userSignOut().then((res)=>{
 

  }).catch((err)=>{
   
  })
}


// isOpen is HAMBURGER MOBILE SCREEN
    const [isOpen, setIsOpen] = useState(false);
    return(<>
      <ToastContainer />
        <header className="text-gray-600 bg-white md:px-[200px] body-font ">
        <div className="container mx-auto  flex flex-wrap pt-1 flex-col md:flex-row items-center ">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
           {/* <img width={'35px'} className="rounded" src="data:image/png;base64,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" alt="" /> */}
            <span className="flex ml-3  items-center w-[300px] h-8 bg-gray-100 rounded border px-2"> <FaSearch   className="text-gray-800 mr-2" />
      <input
        className="w-full font-light h-full bg-transparent outline-none placeholder-gray-500"
        type="search"
        placeholder="Search"
      /></span>
          </a>
  
          <button
            className="md:hidden ml-auto flex items-center text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
  
          <nav
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex md:ml-auto flex flex-col md:flex-row items-center text-base justify-center w-full md:w-auto`}
            style={{ transition: "all 0.3s ease" }}
          >
            <span >
            <Link to={'/'} id="/" onClick={(e)=> setHover(e.target.id) } className={`mr-5 hover:text-black text-gray-500 text-xs inline-block ms-5 ${hover == '/' ? 'text-gray-900' : 'text-gray-500'} `} >
            <div className="px-1  ">< FaHome size={25} id="/" onClick={(e)=> setHover(e.target.id)} /></div>
            Home</Link>
            </span>
  
           <span >
           <Link to={'myNetwork'} id="myNetwork" onClick={(e)=> setHover(e.target.id)} className={`mr-5 hover:text-black text-gray-500 text-xs inline-block ms-5 ${hover == 'myNetwork' ? 'text-gray-900' : 'text-gray-500'} `}>
            <div className="px-4  "><IoMdPeople id="myNetwork" onClick={(e)=> setHover(e.target.id)} size={29} /></div>
            My Network</Link>
            </span>
  
            <span >
            <Link to={'jobs'} id="jobs" onClick={(e)=> setHover(e.target.id)} className={`mr-5 hover:text-black text-gray-500 text-xs inline-block ms-5 ${hover == 'jobs' ? 'text-gray-900' : 'text-gray-500'} `}>
            <div className="px-1  ">< BsSuitcaseLgFill id="jobs" onClick={(e)=> setHover(e.target.id)} size={22} /></div>
            Jobs</Link>
            </span>
  
            <span >
            <Link to={'message'} id="message" onClick={(e)=> setHover(e.target.id)} className={`mr-5 hover:text-black text-gray-500 text-xs inline-block ms-5 ${hover == 'message' ? 'text-gray-900' : 'text-gray-500'} `}>
            <div className="px-4  "><BiSolidMessageDetail  size={25} /></div>
            Messaging</Link>
            </span>
  
           
            <span>
            <Link to={'notification'} id="notification" onClick={(e)=> setHover(e.target.id)} className={`mr-5 hover:text-black text-gray-500 text-xs inline-block ms-5 ${hover == 'notification' ? 'text-gray-900' : 'text-gray-500'} `}>
            <div className="px-5"><IoMdNotifications    size={27}/></div>
            Notifications</Link>
            </span>



            <span>
            <Link to={'profile'} id="dashboard" onClick={(e)=> setHover(e.target.id)} className={`mr-5 hover:text-black text-gray-500 text-xs inline-block ms-5 ${hover == 'dashboard' ? 'text-gray-900' : 'text-gray-500'} `}>
            <div className="px-5"><MdDashboardCustomize     size={24}/></div>
            Dashboard</Link>
            </span>
  

            
            <span >

             { userSingIN ? (
                  <button onClick={userSingOut}>Logout</button>
             ) : (
            <Link to={'signin'} id="login" onClick={(e)=> setHover(e.target.id)} className={`mr-5 hover:text-black text-blue-500  inline-block ms-5 ${hover == 'login' ? 'text-gray-900' : 'text-blue-500'} flex ps-1 `}>Login </Link>
             )
             } 
            </span>
          </nav>
  
         
        </div>
      </header>
      </>
    )
}