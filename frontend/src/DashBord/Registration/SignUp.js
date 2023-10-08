import { useState } from 'react';
import React from 'react';
import '../Registration/Sign.css';
// import { Helmet } from 'react-helmet';
import '../Registration/bg.jpg';
import {signup} from '../../Server/UserServer';
// import { signUp } from '../../Server/UserServer';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer ,toast } from 'react-toastify';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
export const SignUp=()=>{
    const [user ,setUser]  =useState({
        fullName:"",
        contactNo:"",
        email:"",
        address:"",
        city:"",
        state:"",
        pincode:"",
        password:"",
    });

        // const[records,setRecords]=useState([]);

    const Handledata = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        

        // console.log(name,value);

        setUser({...user ,[name]:value});
    }

    const handlesub = (e)=>{
        e.preventDefault();
       
        console.log(user);

        if(user.email.trim() !=="" && user.password.trim() !=="" && user.fullName !=="" && user.contactNo !=="" && user.address!=="" && user.city !=="" && user.state !=="" && user.pincode !=="")
        {

            (signup(user))
            toast.success("Successfully");
            window.location.href="/login"
           
        }
        else
        {
            toast.error("Fill the Details");
        }


    }

       


    // const showbanner = () => {
    //     console.log("calling toast");
    //     toast.success(' Successfully!', {
    //         position: toast.POSITION.TOP_CENTER
    //     });
    // }
    return(
        <>
       

        <section className='secSign'>
    <div className="Sign-up">
        <form action="">
            <div><h1 className='signH'>Sign Up</h1></div>
            <div className="Input-Sign">
                <span className="icon"></span>
                <input className='signinput' type="text" value={user.fullName} onChange={Handledata} name="fullName" required/>
                <label className='signleb' htmlfor="">Full Name :</label>
            </div>
            <div className="Input-Sign">
                <span className="icon"><i className="fa-solid fa-phone"></i></span>
                <input className='signinput' type="text" value={user.contactNo} onChange={Handledata} name="contactNo"  required/>
                <label className='signleb' htmlfor="">Contact No :</label>
            </div>
            <div className="Input-Sign">
                <span className="icon"><i className="fa-solid fa-envelope"></i></span>
                <input className='signinput' type="email" value={user.email} onChange={Handledata} name="email" required />
                <label className='signleb' htmlfor="">E-mail:</label>
            </div>
            <div className="Input-Sign">
                <span className="icon"><i className="fa-solid fa-location-dot"></i></span>
                <input className='signinput' type="text" value={user.address} onChange={Handledata} name="address" required />
                <label className='signleb' htmlfor="">Address:</label>
            </div>
            <div className="Input-Sign">
                <span className="icon"><i className="fa-solid fa-city"></i></span>
                <input className='signinput' type="text" value={user.city} onChange={Handledata} name="city" required />
                <label className='signleb' htmlfor="">City :</label>
            </div>
            <div className="Input-Sign">
                <span className="icon"><i className="fa-solid fa-map-location-dot"></i></span>
                <input className='signinput' type="text" value={user.state} onChange={Handledata}  name="state" required />
                <label className='signleb' htmlfor="">State :</label>
            </div>
            <div className="Input-Sign">
                <span className="icon"><i className="fa-solid fa-thumbtack"></i></span>
                <input className='signinput' type="text" value={user.pin} onChange={Handledata} name="pincode" required />
                <label className='signleb' htmlfor="">Pin Code:</label>
            </div>
            
            <div className="Input-Sign">
                <span className="icon"><i className="fa-solid fa-key"></i></span>
                <input className='signinput' type="password" value={user.pass} onChange={Handledata} name="password" required />
                <label className='signleb' htmlfor="">Password :</label>
            </div>
            
            <button className=" buttonn c-button" type="submit" onClick={handlesub}> Register</button>
            <div className="login-link">
                <p> have an account ? 
                  <Link to='/login'>  Login</Link>
                </p>
            </div>
            <ToastContainer/>
        </form>
       
    </div>
  
</section>
        </>
    )
}