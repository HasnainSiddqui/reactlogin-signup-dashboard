import { Navigate, useNavigate } from "react-router"
import { BAButton } from "../../components/BAButoon"
import { BAHeading } from "../../components/BAHeading"
import { InputComp } from "../../components/BAInput"
import { useState } from "react"
import { addPost } from "../../config/appRouter/firebase/firebaseFunction"

// Toastify Code
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export let CommentForm = () =>{

let navigate = useNavigate()

    let goBack = () =>{
        navigate('/profile/comment')
        }

        let [userData , setUserData] = useState({})


        let post = () =>{
           addPost('comments' , userData).then((res)=>{
            console.log(res);
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
                toast.success(err.message, {
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

   return(<>
    <ToastContainer />
    <div className="container mx-auto my-10 p-8 max-w-md bg-white shadow-lg rounded-lg text-center">
    <div className="flex  items-center mb-6">
        <BAButton bgColor="bg-sky-600" label="Go Back" click={goBack} />
        <span className="ms-10"><BAHeading lable="Add Comment Form" /></span>
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
                onchange={(e) => setUserData({ ...userData, comment: e.target.value })}
                label="Enter Comment"
                place="Comment"
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