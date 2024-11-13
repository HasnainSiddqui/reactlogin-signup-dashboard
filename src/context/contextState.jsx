import { createContext, useState } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import app from "../config/appRouter/firebase/firebaseConfig"

export let Context = createContext()

export let ContextState = ({children}) =>{
    let auth = getAuth(app)
    let [userSingIN , setUserSignIn] = useState(false)
    
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserSignIn(true)
      const uid = user.uid;
      // console.log(uid)
    //   console.log('already signin');
      
      // ...
    } else {
      // User is signed out
    
      setUserSignIn(false)
      
      // ...
    }
  });
    
    return(<>
    
    <Context.Provider value={{userSingIN , setUserSignIn}} >
        {children}
    </Context.Provider>
    
    </>)
}