import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


// const notify = () => {
//     toast("Default Notification !");

//     toast.success("Success Notification !", {
//         position: toast.POSITION.TOP_CENTER
//     });


//     toast("Custom Style Notification with css class!", {
//         position: toast.POSITION.BOTTOM_RIGHT,
//         className: 'foo-bar'
//     });
// };


const Success = (response) =>{
    toast.success(response, {
        position: toast.POSITION.TOP_RIGHT
    });
}

const Warn = (response) =>{
    toast.warn(response, {
        position: toast.POSITION.TOP_RIGHT
    });
}

const Info = (response) =>{
    toast.info(response, {
        position: toast.POSITION.TOP_RIGHT
    });
}

const Error = (response) =>{
    toast.error(response, {
        position: toast.POSITION.TOP_RIGHT
    });
}

const Spinner = () =>{
    return(
        <>
           <div class="loader"></div>   
        </>
    )
}

export default function Notify() {

    return (
        <div>
            <ToastContainer />
        </div>
    )
}

export {Success, Warn, Info, Error, Spinner}
