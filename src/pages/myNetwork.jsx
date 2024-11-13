import { useState } from "react";
import { RiUserAddFill } from "react-icons/ri";

export let Network = () =>{


  let [connect , setConnect] = useState("notConnected")
 let connected = () =>{
  // 3 stage  = false , pending , connected

  if(connect == "notConnected"){
  setTimeout(()=>{
setConnect("connected")
  },2000)
  setConnect("pending")
 } else{
  setConnect("notConnected")
 }
}




 

    return (
      <div className="bg-gray-100">
      <br/>
  <div className="bg-white md:mx-[200px]  shadow rounded-lg p-4 mb-4">
 
 <h1 className="ms-5 my-7">People you may know based on your recent activity</h1>
  
  <div className="flex flex-wrap">


  <div className="w-[300px]  border rounded-lg p-8 mx-6 my-1 hover:shadow">
<img width={'80px'} className="rounded-full mx-auto text-center" src="data:image/jpeg;base64,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" alt="" />
<h1 className="text-center mt-3 font-semibold">Shafi Khan</h1>
<h1 className="text-center  text-gray-500">React Developer | Next JS developer | Front-end...</h1>
<h1 className="text-center text-xs text-gray-500 my-5">Based On Your Profile</h1>
<button onClick={connected} className="rounded-3xl border px-12 font-semibold border-blue-500 text-blue-600 flex py-1 mx-auto hover:border-gray-800 hover:text-gray-600 hover:bg-blue-100">< RiUserAddFill className="mt-1"/>{connect == "notConnected" ? "Connect" : connect == "pending" ? "Loading..." : "Friends" }</button>
  </div>


  <div className="w-[300px]  border rounded-lg p-8  mx-6 my-1 hover:shadow">
<img width={'80px'} className="rounded-full mx-auto text-center" src="https://i.pinimg.com/736x/07/33/ba/0733ba760b29378474dea0fdbcb97107.jpg" alt="" />
<h1 className="text-center mt-3 font-semibold">Abdul Hafiz</h1>
<h1 className="text-center  text-gray-500">Frontend Web Developer @ Qualix Solutions |...</h1>
<h1 className="text-center text-xs text-gray-500 my-5">Based On Your Profile</h1>
<button className="rounded-3xl border px-12 font-semibold border-blue-500 text-blue-600 flex py-1 mx-auto hover:border-gray-800 hover:text-gray-600 hover:bg-blue-100">< RiUserAddFill className="mt-1"/>Connect</button>
  </div>


  <div className="w-[300px]  border rounded-lg p-8  mx-6 my-1 hover:shadow">
<img width={'80px'} className="rounded-full mx-auto text-center" src="https://marketplace.canva.com/EAFuJ5pCLLM/1/0/1600w/canva-black-and-gold-simple-business-man-linkedin-profile-picture-BM_NPo97JwE.jpg" alt="" />
<h1 className="text-center mt-3 font-semibold">Taha Hussain</h1>
<h1 className="text-center  text-gray-500">Senior Python Developer @ Udhaar Book...</h1>
<h1 className="text-center text-xs text-gray-500 my-5">Based On Your Profile</h1>
<button className="rounded-3xl border px-12 font-semibold border-blue-500 text-blue-600 flex py-1 mx-auto hover:border-gray-800 hover:text-gray-600 hover:bg-blue-100">< RiUserAddFill className="mt-1"/>Connect</button>
  </div>


  <div className="w-[300px]  border rounded-lg p-8  mx-6 my-1 hover:shadow">
<img width={'80px'} className="rounded-full mx-auto text-center" src="https://marketplace.canva.com/EAFqNrAJpQs/1/0/1600w/canva-neutral-pink-modern-circle-shape-linkedin-profile-picture-WAhofEY5L1U.jpg" alt="" />
<h1 className="text-center mt-3 font-semibold">Unzila CRO</h1>
<h1 className="text-center  text-gray-500">Front end Developer || Html 5 || Css3 || JavaScript...</h1>
<h1 className="text-center text-xs text-gray-500 my-5">Based On Your Profile</h1>
<button className="rounded-3xl border px-12 font-semibold border-blue-500 text-blue-600 flex py-1 mx-auto hover:border-gray-800 hover:text-gray-600 hover:bg-blue-100">< RiUserAddFill className="mt-1"/>Connect</button>
  </div>


  <div className="w-[300px]  border rounded-lg p-8  mx-6 my-1 hover:shadow">
<img width={'80px'} className="rounded-full mx-auto text-center" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhLBV2gL7AZt6i3yO3rbk6G0i7GmiWSLQHsA&s" alt="" />
<h1 className="text-center mt-3 font-semibold">Ahmed Masood</h1>
<h1 className="text-center  text-gray-500">User Interface Magician | Crafting Web Journeys...</h1>
<h1 className="text-center text-xs text-gray-500 my-5">Based On Your Profile</h1>
<button className="rounded-3xl border px-12 font-semibold border-blue-500 text-blue-600 flex py-1 mx-auto hover:border-gray-800 hover:text-gray-600 hover:bg-blue-100">< RiUserAddFill className="mt-1"/>Connect</button>
  </div>


  <div className="w-[300px]  border rounded-lg p-8  mx-6 my-1 hover:shadow">
<img width={'80px'} className="rounded-full mx-auto text-center" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGD0BcxwuvdI1H-S35GmT43vP2MBIdCgyeIA&s" alt="" />
<h1 className="text-center mt-3 font-semibold">Muzammil Ali</h1>
<h1 className="text-center  text-gray-500">React Developer | Next JS developer | Front-end...</h1>
<h1 className="text-center text-xs text-gray-500 my-5">Based On Your Profile</h1>
<button className="rounded-3xl border px-12 font-semibold border-blue-500 text-blue-600 flex py-1 mx-auto hover:border-gray-800 hover:text-gray-600 hover:bg-blue-100">< RiUserAddFill className="mt-1"/>Connect</button>
  </div>


  <div className="w-[300px]  border rounded-lg p-8 mx-6 my-1 hover:shadow">
<img width={'80px'} className="rounded-full mx-auto text-center" src="data:image/jpeg;base64,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" alt="" />
<h1 className="text-center mt-3 font-semibold">Shafi Khan</h1>
<h1 className="text-center  text-gray-500">React Developer | Next JS developer | Front-end...</h1>
<h1 className="text-center text-xs text-gray-500 my-5">Based On Your Profile</h1>
<button className="rounded-3xl border px-12 font-semibold border-blue-500 text-blue-600 flex py-1 mx-auto hover:border-gray-800 hover:text-gray-600 hover:bg-blue-100">< RiUserAddFill className="mt-1"/>Connect</button>
  </div>


  <div className="w-[300px]  border rounded-lg p-8  mx-6 my-1 hover:shadow">
<img width={'80px'} className="rounded-full mx-auto text-center" src="https://i.pinimg.com/736x/07/33/ba/0733ba760b29378474dea0fdbcb97107.jpg" alt="" />
<h1 className="text-center mt-3 font-semibold">Abdul Hafiz</h1>
<h1 className="text-center  text-gray-500">Frontend Web Developer @ Qualix Solutions |...</h1>
<h1 className="text-center text-xs text-gray-500 my-5">Based On Your Profile</h1>
<button className="rounded-3xl border px-12 font-semibold border-blue-500 text-blue-600 flex py-1 mx-auto hover:border-gray-800 hover:text-gray-600 hover:bg-blue-100">< RiUserAddFill className="mt-1"/>Connect</button>
  </div>


  <div className="w-[300px]  border rounded-lg p-8  mx-6 my-1 hover:shadow">
<img width={'80px'} className="rounded-full mx-auto text-center" src="https://marketplace.canva.com/EAFuJ5pCLLM/1/0/1600w/canva-black-and-gold-simple-business-man-linkedin-profile-picture-BM_NPo97JwE.jpg" alt="" />
<h1 className="text-center mt-3 font-semibold">Taha Hussain</h1>
<h1 className="text-center  text-gray-500">Senior Python Developer @ Udhaar Book...</h1>
<h1 className="text-center text-xs text-gray-500 my-5">Based On Your Profile</h1>
<button className="rounded-3xl border px-12 font-semibold border-blue-500 text-blue-600 flex py-1 mx-auto hover:border-gray-800 hover:text-gray-600 hover:bg-blue-100">< RiUserAddFill className="mt-1"/>Connect</button>
  </div>

  </div>

</div>
<br />
</div>
    );
  }