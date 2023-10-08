import React, { useState } from "react";
import '../Registration/Login.css'

// import { Link } from 'react-router-dom';
import { server } from "../../Server/UserServer";
import '../Services/gp.jpg';
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { Link } from "react-router-dom";
export  const Login=()=>{

            const [logUser,setLogUser] =useState({
                    username:'',
                    password:''
            })

            const change=(event,field)=>{
                let accValue= event.target.value
                setLogUser({
                    ...logUser,[field]:accValue
                })
            }

            const submitval=(event)=>{
                event.preventDefault();
                console.log(logUser);

                if(logUser.username.trim()===''|| logUser.password.trim()==='')
                {
                    toast.error("name is requried")
                    
                }


                else
                {
                    return axios.post(`${server}/UserLogin`,logUser).then((response)=>{
                        // console.log(response.data.password);

                       
                        if(response.data===true)
                        {
                           localStorage.setItem("id",logUser.username);
                        //    setTimeout(function(){console.log(logUser);toast.success("got it")},1000);
                                // console.log(localStorage.getItem(logUser))
                            toast.success("yess");
                            window.location.href="/" ;
                            

                        }
                        else
                        {
                            toast.error("not login");
                        }
                    })
                    // toast.success("Success")
                }


            }

            
            const loc = localStorage.getItem("id");

        //    const proName=(event) => {
        //         event.preventDefault();
        //         axios.get(`${server}/getprofile/${loc}`)
        //           .then((resp) => {
                    
        //             localStorage.setItem("kks",resp.data.fullName);
        //           })
        //          console.log("kks");
        //       };

    return(
    <div className='Login-body'>
          <section className='secLog'>
           < div className="login-box">
                <form >
                    <div><h1 className='loginH'>User Login</h1></div>
                    <div className="input-box">
                    <span className="icon"><i className="fa-solid fa-envelope"></i></span>
                    <input type="email" 
                    value={logUser.username} 
                    onChange={(e)=>change(e,'username')} 
                    required/>
                    <label htmlFor="">Email</label>
                 </div>
                 <div className="input-box">
                    <span className="icon"><i className="fa-solid fa-key"></i></span>
                    <input type="password" 
                    value={logUser.password}
                     onChange={(e)=>change(e,'password')} 
                     required/>
                    <label htmlFor="">Password</label>
                    </div>
                    {/* <div className="remember-forgot">
                    <label htmlFor=""><input type="checkbox"/> Remember me </label>
                    Forgot Password?
                 </div> */}
                
                 <button className="buttonn c-button" type="submit" onClick={submitval}  > Login</button>
                 <div className="register-link">
                    <p>Don't have an account ? 
                    <Link to='/signup'> Register</Link>
                 </p>
                </div>
            </form>
            <ToastContainer/>
            </div>
            
        </section> 
       
  {/* <div style={{marginTop:"100px"}}>
    Hi Avinash
  </div> */}
 </div>
    );
};

