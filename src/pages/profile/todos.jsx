import { useEffect, useState } from "react";
import { ToastifySuccess } from "../../components/Toastify";

// Toastify Code
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoaderSpiner from "../../components/loader";
import { BAHeading } from "../../components/BAHeading";
import { BAButton } from "../../components/BAButoon";
import { useNavigate } from "react-router";
import { BATable } from "../../components/table";
import { getData } from "../../config/appRouter/firebase/firebaseFunction";

export let Todos = () => {
    let navigate = useNavigate()
    let [albumData, setAlbumData] = useState([])

    let checkToast = () => {

        // Toastify success message
        toast.success("Login Successful!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark "
        });
        
        toast.error("Login Failed! Please try again.", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            
        });

    }

    let [loader , setLoader] = useState(false)

    let getuserData = () => {
setLoader(true)
        getData('todos').then((res)=>{
            setAlbumData(res);
setLoader(false)            
        }).catch((err)=>{
            alert(err.message)
            setLoader(false)
        })

    }
    useEffect(() => {
        getuserData()
    }, [])

    let userColumn = [
        {
            name: "Title",
            lable: "title"
        },
       
        {
            name: "Description ",
            lable: "description"
        }

    ]

    
    let navigatePage = () =>{
        navigate('/profile/todos/todosForm')
        }
    return (
        <>
             {loader ? (<LoaderSpiner />) : (
        
        <div className="container">
            <span className="flex justify-between"><BAHeading lable={'Todos'} /> <BAButton label={'Add Todos'} bgColor={'bg-sky-600'} click={navigatePage} /> </span>
           <BATable column={userColumn} data={albumData} folderName={'todos'} />
        </div>
        )
}
            <ToastContainer />
        </>
    )
}