import { Button } from "antd";
export let BAButton = ({label  , disabled , loading , click , bgColor }) =>{
    return(
        <>
        <Button  onClick={click} className={`${bgColor ? bgColor : 'bg-none'} text-white`}  disabled={disabled} > {loading? "Loading..." : label ? label : "enter value"} </Button> 
        </>
    )
}