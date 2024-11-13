import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../../pages/home"
import { Header } from "../../components/header"
import { Network } from "../../pages/myNetwork"
import { Jobs } from "../../pages/jobs"
import { Messiging } from "../../pages/messiging"
import { Notification } from "../../pages/notification"
import { MyProfile } from "../../pages/dashboard"
import { NotFound } from "../../pages/notFound"
import { Signup } from "../../pages/signup"
import { Signin } from "../../pages/signin"

export let ReactRouter = () => {
    return (
        <BrowserRouter >
        <Header />
            <Routes >
                <Route path="/" element={<Home />}/>
                <Route path="myNetwork" element={<Network />}/>
                <Route path="jobs" element={<Jobs />}/>
                <Route path="message" element={<Messiging />}/>
                <Route path="notification" element={<Notification />}/>
                <Route path="signup" element={<Signup />}/>
                <Route path="signin" element={<Signin />}/>
                <Route path="profile/*" element={<MyProfile/>}/>
                <Route path="/*" element={<NotFound/>}/>


            </Routes>
        </BrowserRouter>
    )
}