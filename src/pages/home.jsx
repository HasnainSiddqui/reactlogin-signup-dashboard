import { useEffect, useState } from "react";
import { BAButton } from "../components/BAButoon";
import { Hero } from "../components/herosec";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useContext } from "react";
import { Context } from "../context/contextState";

export let Home = () => {

  let {userSingIN , setUserSignIn} = useContext(Context)

//   console.log(userSingIN);


  return (
    <>
   

<Hero />
    
</>
  );
}