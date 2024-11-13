import { Input } from "antd";
import { useState } from "react";

export let InputComp = ({label , onchange , type , place }) =>{
 
 
 
    return(
       <>
       
       <div className="text-gray-600">{label}</div><Input onChange={onchange} type={type ? type : 'text'} className="w-[300px] ml-3" placeholder={place ? place : "enter name"} />
      
       </>
    )
}