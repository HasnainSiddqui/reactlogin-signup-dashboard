
import { useNavigate, useSearchParams } from "react-router-dom"
import { BAButton } from "../../components/BAButoon"
import { InputComp } from "../../components/BAInput"
import { addPost, getData } from "../../config/appRouter/firebase/firebaseFunction"
import { useEffect, useState } from "react"
import { BAHeading } from "../../components/BAHeading"


// Toastify Code
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export let PostForm = () => {


let navigate = useNavigate()

let [userData , setUserData] = useState({})


let goBack = () =>{
navigate('/profile/posts')
}

let post = () =>{
    addPost('posts' , userData).then(()=>{
        console.log("data post");
         // Toastify success message
         toast.success("Data Successfully Addedd", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark "
        });
        
        
    }).catch((err)=>{
         // Toastify success message
         toast.error(err.message, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark "
        });
        
    })
}


    return (
<>
<ToastContainer />


        <div className="container mx-auto my-10 p-8 max-w-md bg-white shadow-lg rounded-lg text-center">
            <div className="flex  items-center mb-6">
                <BAButton bgColor="bg-sky-600" label="Go Back" click={goBack} />
                <span className="ms-10"><BAHeading lable="Add Post Form" /></span>
            </div>

            <div className="space-y-4">
                <div>
                    <InputComp
                        onchange={(e) => setUserData({ ...userData, username: e.target.value })}
                       
                        label="enter username"
                    
                        className="w-full border border-gray-300 rounded-lg p-2 focus:border-sky-600"
                    />
                </div>
                <div>
                    <InputComp
                        onchange={(e) => setUserData({ ...userData, title: e.target.value })}
                        label="Enter Title"
                        place="title"
                        className="w-full border border-gray-300 rounded-lg p-2 focus:border-sky-600"
                    />
                </div>
                <div>
                    <InputComp
                        onchange={(e) => setUserData({ ...userData, description: e.target.value })}
                        label="Enter Description"
                        place="Description"
                        className="w-full border border-gray-300 rounded-lg p-2 focus:border-sky-600"
                    />
                </div>
            </div>

            <div className="mt-6">
                <BAButton click={post} bgColor="bg-sky-600" label="Save" className="w-full py-2 rounded-lg text-white font-semibold" />
            </div>
        </div>
        </>
    )
}