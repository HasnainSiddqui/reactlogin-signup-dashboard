import { useEffect, useState } from "react"
import { deleteData, editData } from "../config/appRouter/firebase/firebaseFunction"
import { BAButton } from "./BAButoon"
// icons
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";

// Toastify Code
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export let BATable = ({ data, column, folderName }) => {


  let deletuserData = (i, folderName) => {


    deleteData(folderName, i).then(() => {
      toast.error("Deleted Successful!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark "
    });
    

    }).catch((err) => {
      console.log(err.message);

    })

  }


  let [popup, setPopup] = useState(false)



  let editUserData = (id) => {
    setEditUserId(id)
    setPopup(true)
    
  }
  
  
  
  let [editUserId , setEditUserId] = useState("")
  let [updateUserObj, setUpdateUserObj] = useState({})

  let saveUserData = (folderName ) => {
   

     editData(folderName , editUserId , updateUserObj).then((res)=>{
      toast.success("Save Successful!", {
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

    setPopup(false)

  }




  return (
    <>
     <ToastContainer />
      <table class="min-w-full bg-white border border-gray-200">
        <thead>
          <tr class="bg-gray-100 border-b border-gray-200">

            {column.map((column, i) => <th key={i} class="text-left py-3 px-4 font-semibold text-gray-700">{column.name}</th>)}
          </tr>
        </thead>
        <tbody>


          {
            data.map((row, i) => {

              return (
                <tr class="border-b border-gray-200 hover:bg-gray-50">

                  {column.map((col, colInd) => <><td key={colInd} class="py-3 px-4 text-gray-600">{row[col.lable]}</td></>)

                  }

                  <button className="text-green-600 hover:text-gray-600 my-3 me-2" onClick={() => editUserData(row.id)}><FaRegEdit size={22} /></button>
                  <button className="text-red-600 hover:text-gray-600 my-3" onClick={() => deletuserData(row.id, folderName)}><RiDeleteBin5Line size={24} /></button>

                </tr>)
            })

          }


        </tbody>
      </table>
      {popup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md w-1/3">
            <h2 className="text-lg font-semibold mb-4">Edit User</h2>
            {column.map(data => {
              return (
                <>

                  <div className="mb-3">
                    <label className="block text-gray-700">{data.name}:</label>
                    <input
                      type="text"
                      name="name"
                      // value={data.name}
                      onChange={(e) => (setUpdateUserObj({ ...updateUserObj, [data.lable]: e.target.value }))}
                      // placeholder={row.name}
                      className="w-full border border-gray-300 p-2 rounded"
                    />

                  </div>

                </>
              )
            })}

            <div className="flex justify-end mt-5">
              <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2" onClick={() => saveUserData(folderName)} >
                Save
              </button>
              <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={() => setPopup(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}