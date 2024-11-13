import { useEffect, useState } from "react";

import {InputComp} from "../../components/BAInput"
import {BAButton} from "../../components/BAButoon"
import { useNavigate } from "react-router";
import { RiUserAddFill } from "react-icons/ri";
import { BAHeading } from "../../components/BAHeading";
import { addPost } from "../../config/appRouter/firebase/firebaseFunction";

// Toastify Code
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export let Form = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate('/profile/');
    };

    const [userData, setUserData] = useState({
      
    });

    
    
    const postData = () => {
       addPost( 'users',userData).then((res)=>{
        console.log(res)
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
    };

    return (
        <>
         <ToastContainer />
       
        <div className="container mx-auto my-10 p-8 max-w-md bg-white shadow-lg rounded-lg text-center">
            <div className="flex  items-center mb-6">
                <BAButton bgColor="bg-sky-600" label="Go Back" click={goBack} />
                <span className="ms-10"><BAHeading lable="Add User Form"  /></span>
            </div>
            
            <div className="space-y-4">
                <div>
                    <InputComp
                        onchange={(e) => setUserData({ ...userData, name: e.target.value })}
                        label="Enter Name"
                        place="Name"
                        className="w-full border border-gray-300 rounded-lg p-2 focus:border-sky-600"
                    />
                </div>
                <div>
                    <InputComp
                        onchange={(e) => setUserData({ ...userData, email: e.target.value })}
                        label="Enter Email"
                        place="Email"
                        className="w-full border border-gray-300 rounded-lg p-2 focus:border-sky-600"
                    />
                </div>
                <div>
                    <InputComp
                        onchange={(e) => setUserData({ ...userData, phone: e.target.value })}
                        label="Enter Number"
                        place="Number"
                        className="w-full border border-gray-300 rounded-lg p-2 focus:border-sky-600"
                    />
                </div>
            </div>
            
            <div className="mt-6">
                <BAButton click={postData} bgColor="bg-sky-600" label="Save" className="w-full py-2 rounded-lg text-white font-semibold" />
            </div>
        </div>
        </>
    );
};
