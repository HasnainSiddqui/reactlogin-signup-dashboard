import { useEffect, useState } from "react"

import { BAButton } from "../../components/BAButoon"
import { BAHeading } from "../../components/BAHeading"
import { useNavigate } from "react-router"
import { getData } from "../../config/appRouter/firebase/firebaseFunction"
import LoaderSpiner from "../../components/loader"
import { BATable } from "../../components/table"

export let Posts = () => {


    let userColumn = [
        {
            name: "Name",
            lable: "username"
        },
        {
            name: "Title",
            lable: "title"
        },
        {
            name: "Description ",
            lable: "description"
        }

    ]

    let navigate = useNavigate()

    let navigatePage = () => {
        navigate('/profile/posts/postForm')
    }

    let [postData, setPostData] = useState([])

    let [Loader, setLoader] = useState(false)



    useEffect(() => {
        setLoader(true)
        getData("posts").then((res) => {
            setPostData(res);
            setLoader(false)
        }).catch((err) => {
            alert(err.message)
            setLoader(false)
        })
    }, [])

    return (
        <>
            {Loader ? (<LoaderSpiner />) : (
                <>
                {/* 
            {postData.map((data) => {
                    return (
                        <div key={data.title} className="container bg-white p-5 rounded my-1 "><h1 className="font-semibold" >{data.title}.</h1>
                            <h1>{data.description}</h1>
                        </div>
                    )
                })    
            } */}
<span className="flex justify-between"><BAHeading lable={'User Posts'} /> <BAButton label={'Add Post'} bgColor={'bg-sky-600'} click={navigatePage} /> </span>
<BATable  column={userColumn} data={postData}  folderName={'posts'}/>

            </>
            )
        }
        </>
    )
}