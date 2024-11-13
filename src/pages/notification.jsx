import { useContext } from "react";
import { Context } from "../context/contextState";

export let Notification = () =>{

let context = useContext(Context)
 
 

    return (
      <div className="bg-gray-100 h-screen">
      <br/>
  <div className="bg-white md:mx-[200px] px-[190px] shadow rounded-lg p-4 mb-4">
 
 <h1 className="text-center">No Notification  </h1>
  
</div>
<br />
</div>
    );
  }