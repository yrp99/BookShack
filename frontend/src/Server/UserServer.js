// import { Await } from "react-router-dom";
// import { Myserver } from "./Server";
import axios from "axios";

//  export const signUp =(user)=>{
//     return Myserver.post("/CustomerRegistration")
//     .then((Response)=>Response.user)
// }
 export const bkt =localStorage.getItem("bokid")
export const loc = localStorage.getItem("id");
export const adloc=localStorage.getItem("ADid")
export const server= 'http://localhost:8080';
// 192.168.29.221

export const signup = async(data)=>
{
    try{
       return await axios.post(`${server}/CustomerRegistration`,data)
    }
    catch(error)
    {
        console.log("error while calling api",error.message);
    }
}

export const AddBooks =(obook)=>
{
    try{
        return axios.post(`${server}/BookRegistration`,obook).then((response)=>{
            console.log("i m back");
            console.log(response);
            // localStorage.setItem("imgId",er.data.bookId);
        })
    }
    catch(error)
    {
        console.log("error while calling api",error.message);

    }
}

export const DonateBooks =(donate)=>
{
    try{
        // console.log(donate);
        return axios.post(`${server}/DonateBooks`,donate).then((er)=>{
            console.log("i m back");
        })
    }
    catch(error)
    {
        console.log("error while calling api",error.message);

    }
}
