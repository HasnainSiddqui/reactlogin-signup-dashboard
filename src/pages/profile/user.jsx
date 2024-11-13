
import { useEffect, useState } from "react"
import { BATable } from "../../components/table"

import { useNavigate } from "react-router"
import { BAButton } from "../../components/BAButoon"
import { BAHeading } from "../../components/BAHeading"
import { getData } from "../../config/appRouter/firebase/firebaseFunction"
import LoaderSpiner from "../../components/loader"



export let Users = () => {
    let navigate = useNavigate()

    let navigat = () => {
        navigate('/profile/users/form')
    }

    let [userData, setUsersData] = useState([])
    let [Loader, setLoader] = useState(false)

    let getuserData = () => {
        setLoader(true)
        getData('users').then((res) => {
            setUsersData(res)
            setLoader(false)
        }).catch((err) => {
            alert(err)
            setLoader(false)
        })

    }
    useEffect(() => {
        getuserData()
    }, [])


    let userColumn = [
        {
            name: "Name",
            lable: "name"
        },
        {
            name: "Email",
            lable: "email"
        },
        {
            name: "Phone Number ",
            lable: "phone"
        }

    ]



    return (

        <div className="container px-10 py-10">
            {Loader ? (<LoaderSpiner />) : (
                <>
                    <span className="flex justify-between"><BAHeading lable={'All Users'} /> <BAButton click={navigat} label={`Add User`} bgColor={'bg-sky-600'} /> </span>

                    <BATable data={userData} column={userColumn} folderName={'users'}/>
                </>
            )}
        </div>
    )
}