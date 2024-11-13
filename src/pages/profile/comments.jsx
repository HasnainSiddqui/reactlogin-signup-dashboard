import { useEffect, useState } from "react";

// import { BATable } from "../../components/table";
import { BAHeading } from "../../components/BAHeading";
import { BAButton } from "../../components/BAButoon";
import { useNavigate } from "react-router";
import { getData } from "../../config/appRouter/firebase/firebaseFunction";
import { BATable } from "../../components/table";
import LoaderSpiner from "../../components/loader";

export let Comments = ()=>{

let navigate = useNavigate()

    let [commentData , setCommentData] = useState([])


    let userColumn = [
        {
            name: "Name",
            lable: "username"
        },
       
        {
            name: "Comment ",
            lable: "comment"
        }

    ]

    let [loader , setLoader] = useState(false)

    let getuserData = () =>{
        setLoader(true)
    getData('comments').then((res)=>{
        setCommentData(res);
        setLoader(false)
    }).catch((err)=>{
        alert(err.message)
        setLoader(false)
    })
}

useEffect(()=>{
getuserData()
},[])

let navigatePage = () =>{
    navigate('/profile/comment/commentForm')
    }



    return(
        <>
        {loader ? (<LoaderSpiner />) : (
        
        <div className="container">
            <span className="flex justify-between"><BAHeading lable={'Comments'} /> <BAButton label={'Add Comments'} bgColor={'bg-sky-600'} click={navigatePage} /> </span>
           <BATable column={userColumn} data={commentData} folderName={'comments'} />
        </div>
        )
}
        </>
    )
}