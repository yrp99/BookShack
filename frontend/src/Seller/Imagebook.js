import axios from 'axios';
import React, { useState } from 'react'
import { loc, server } from '../Server/UserServer';
import '../Seller/Sell.css';
import { ToastContainer, toast } from 'react-toastify';
// import { server } from '../Server/UserServer';



export const Imagebook=() =>{
    const bookId = localStorage.getItem("bbid");
    const email = loc;
    
    const [image1, setimage1]= useState("");
    const [image2, setimage2]=useState("");
    const [image3, setimage3]=useState("");
    const [image4, setimage4]=useState("");
    const [image5, setimage5]=useState("");
    // const [email, setemail]=useState("")
    // const [bookId, setbookid]=useState("");
    

    
 const allimg={image1,image2,image3,image4,image5,email,bookId};

    const addBook=(async()=>{
        
       
                if(loc)
                {//
                    if(image1 !==""  ){
                           return await axios.post(`${server}/uploadimage`,allimg).then((response)=>{
                                // console.log(response)
                                window.location.href='/sell'
                                toast.success("all photos are uploaded")
                            })
   
                    }
                    else{
                        toast.error(" photo missing")
                    }
                }
    })

  return (
    <div className='imageU'>
       
        <div className="imgbox">
                <input type="file" className="filei" id=""  onChange={(e)=>{setimage1(e.target.files[0])}}/>
                <button className="buttonn c-button"   onClick={(e)=>{
                     e.preventDefault();
                    const datafrom = new FormData();
                    datafrom.append('file',image1);

                    axios.post(`${server}/upload`,datafrom).then((res)=>{
                        setimage1(res.data)
                        toast.success("upload success");
                    })
                }}>Upload</button>
            </div>
            <div className="imgbox"> 
                <input type="file" className="filei" id="" onChange={(e)=>{setimage2(e.target.files[0])}}/><button className="buttonn c-button"  onClick={()=>{
                    const formData = new FormData();
                    formData.append('file',image2);

                    axios.post(`${server}/upload`,formData).then((res)=>{
                        setimage2(res.data)
                        toast.success("upload success");
                    })

                }}>Upload</button>
            </div>
            <div className="imgbox"> 
                <input type="file" className="filei" id="" onChange={(e)=>{setimage3(e.target.files[0])}}/><button className="buttonn c-button"  onClick={()=>{
                    const formData = new FormData();
                    formData.append('file',image3);

                    axios.post(`${server}/upload`,formData).then((res)=>{
                        setimage3(res.data)
                        toast.success("upload success");
                    })

                }}>Upload</button>
            </div>
            <div className="imgbox"> 
                <input type="file" className="filei" id="" onChange={(e)=>{setimage4(e.target.files[0])}}/><button className="buttonn c-button"  onClick={()=>{
                    const formData = new FormData();
                    formData.append('file',image4);

                    axios.post(`${server}/upload`,formData).then((res)=>{
                        setimage4(res.data)
                        toast.success("upload success");
                    })

                }}>Upload</button>
            </div>
            <div className="imgbox"> 
                <input type="file" className="filei" id="" onChange={(e)=>{setimage5(e.target.files[0])}}/><button className="buttonn c-button"  onClick={()=>{
                    const formData = new FormData();
                    formData.append('file',image5);

                    axios.post(`${server}/upload`,formData).then((res)=>{
                        setimage5(res.data)
                        toast.success("upload success");
                    })

                }}>Upload</button>
                <ToastContainer/>
            </div>
            <button className=" buttonn c-button" type="submit" onClick={addBook} >Submit Image</button>
            <ToastContainer/>
    </div>
  )
}

