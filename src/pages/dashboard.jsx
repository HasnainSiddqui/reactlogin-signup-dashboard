import { Route, Routes } from "react-router";
import { Posts } from "./profile/posts";
import { RxDashboard } from "react-icons/rx";
import { Link } from "react-router-dom";
import { MdOutlinePostAdd } from "react-icons/md";
import { Comments } from "./profile/comments";
import { Users } from "./profile/user";
import { LuUsers } from "react-icons/lu";
import { LiaCommentsSolid } from "react-icons/lia";
import { IoAlbumsOutline } from "react-icons/io5";
import { useState } from "react";

import { Form } from "./profile/userForm";
import { PostForm } from "./profile/postForm";
import { CommentForm } from "./profile/commentsForm";
import { Todos } from "./profile/todos";
import { TotosForm } from "./profile/todosForm";

export let MyProfile = () => {

let[ hoverLink , setHoverLink] = useState("users")


    return (
        <div className="bg-gray-200  grid grid-cols-12 ">
            <div className="col-span-2 bg-slate-800 text-white ps-5 py-8 ms-3 rounded-s-2xl">
                <span className="flex mx-4"> <RxDashboard size={25} /><h1 className="mx-4 mb-10 font-semibold text-xl">Dashboard</h1> </span>


                <Link to={'/profile/'}>
                    <button style={{ width: '200px' }} id="users" onClick={(e)=> setHoverLink(e.target.id)} className={` ${hoverLink == "users" ? 'bg-sky-600 font-semibold'  : 'bg-transparent' } hover:bg-sky-500 px-4 py-3 rounded-lg flex my-2 `}>< LuUsers  style={{ marginRight: '30px' }} size={21} /> Users</button>
                </Link>

                <Link to={'posts'}>
                    <button style={{ width: '200px' }} id="posts" onClick={(e)=> setHoverLink(e.target.id)} className={` ${hoverLink == "posts" ? 'bg-sky-600 font-semibold' : 'bg-transparent' } hover:bg-sky-500 px-4 py-3 rounded-lg flex my-2 `}>< MdOutlinePostAdd style={{ marginRight: '30px' }} size={22} /> Posts</button>
                </Link>

                <Link to={'comment'}>
                    <button style={{ width: '200px' }} id="comments" onClick={(e)=> setHoverLink(e.target.id)} className={` ${hoverLink == "comments" ? 'bg-sky-600 font-semibold' : 'bg-transparent' } hover:bg-sky-500 px-4 py-3 rounded-lg flex my-2 `}>< LiaCommentsSolid style={{ marginRight: '30px' }} size={22} /> Comments</button>
                </Link>

                    <Link to={'todos'}>
                    <button style={{ width: '200px' }} id="albums" onClick={(e)=> setHoverLink(e.target.id)} className={` ${hoverLink == "albums" ? 'bg-sky-600 font-semibold' : 'bg-transparent' } hover:bg-sky-500 px-4 py-3 rounded-lg flex my-2 `}>< IoAlbumsOutline style={{ marginRight: '30px' }} size={22} /> Todos</button>
                </Link>


            </div>



            <div className="col-span-9 p-10">

                <Routes>
                    <Route path="/" element={<Users />} />
                    <Route path="/users/form" element={<Form />} />

                    <Route path="/posts" element={<Posts />} />
                    <Route path="/posts/postForm" element={<PostForm />} />
                 
                    <Route path="/comment" element={<Comments />} />
                    <Route path="/comment/commentForm" element={<CommentForm />} />

                    <Route path="/todos" element={<Todos />} />
                    <Route path={"/todos/todosForm"} element={<TotosForm />} />
                </Routes>


            </div>
        </div >

    )
}