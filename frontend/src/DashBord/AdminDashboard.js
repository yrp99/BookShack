import React, { useState } from 'react';
import '../DashBord/AdminDashboard.css';
import axios from 'axios';
import { adloc, server } from '../Server/UserServer';
// import { NavBar } from './NavBar';
// import Footer from './footer';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const AdminDashboard=()=> {
const [arr,sarr]=useState([]);
// const navi =useNavigate();


const booklist=()=>{
   
  axios.get(`${server}/admin/BooksList`).then((Response)=>{
            console.log(Response.data)

            const data =Response.data;
            sarr(data);
            localStorage.setItem("booklist",JSON.stringify(Response.data))
  })

    //  arr.map((info)=>{
    //         console.log(info.bookName)
    //         navi("/booklist",{state:{info}})
            
    //  })
    if(adloc){
      document.getElementById("oklist").click();
    }
    else
    {
      toast.error("you not Admin ")
      window.location.href='/login'
    }
      // document.getElementById("oklist").click();

}


const listuser=()=>{
   
  axios.get(`${server}/admin/CustomerList`).then((Response)=>{
            console.log(Response.data)

            const data =Response.data;
            // sarr(data);
            localStorage.setItem("listuser",JSON.stringify(Response.data))
  })
    //  arr.map((info)=>{
    //         console.log(info.bookName)
    //         navi("/booklist",{state:{info}})
            
    //  })
    if(adloc){
      document.getElementById("derlist").click();
    }
    else
    {
      toast.error("you not Admin ")
      window.location.href='/login'
    }
      // document.getElementById("orderlist").click();

}


const orderlist=()=>{
   
  axios.get(`${server}/admin/orderList`).then((Response)=>{
            console.log(Response.data)

            const data =Response.data;
            // sarr(data);
            localStorage.setItem("orderlist",JSON.stringify(Response.data))
  })

    //  arr.map((info)=>{
    //         console.log(info.bookName)
    //         navi("/booklist",{state:{info}})
            
    //  })
    if(adloc){
      document.getElementById("uslist").click();
    }
    else
    {
      toast.error("you not Admin ")
      window.location.href='/login'
    }
      // document.getElementById("uslist").click();

}
       
const feedback=()=>{
   
  axios.get(`${server}/feedback`).then((Response)=>{
            console.log(Response.data)

            const data =Response.data;
            // sarr(data);
            localStorage.setItem("feedback",JSON.stringify(Response.data))
  })

    //  arr.map((info)=>{
    //         console.log(info.bookName)
    //         navi("/booklist",{state:{info}})
            
    //  })
    if(adloc){
      document.getElementById("feedlist").click();
    }
    else
    {
      toast.error("you not Admin ")
      window.location.href='/login'
    }

}

const donate=()=>{
   
  axios.get(`${server}/admin/DonateList`).then((Response)=>{
            console.log(Response.data)

            const data =Response.data;
            // sarr(data);
            localStorage.setItem("donatet",JSON.stringify(Response.data))
  })

    //  arr.map((info)=>{
    //         console.log(info.bookName)
    //         navi("/booklist",{state:{info}})
            
    //  })
    if(adloc){
      document.getElementById("donatebk").click();
    }
    else
    {
      toast.error("you not Admin ")
      window.location.href='/login'
    }

}



  return (
    <>
   {/* <NavBar/> */}
    <div className="card-container">
        
      <div className="card-admin">
        <button className="button" onClick={booklist} >Books List</button>
      </div>
      <div className="card-admin">
        <button className="button" onClick={listuser}>User Details</button>
      </div>
      <div className="card-admin">
        <button className="button" onClick={feedback}> Feedback </button>
      </div>
      <div className="card-admin">
        <button className="button" onClick={orderlist}>Order Details</button>
      </div>
      <div className="card-admin">
        <button className="button" onClick={donate}>Donate Book List</button>
      </div>
    </div>
    {/* <Footer/> */}
    <Link to='/booklist' id='oklist'></Link>
    <Link to='/userdetails' id='derlist'></Link>
    <Link to='/deroflist' id='uslist'></Link>
    <Link to='/suggestion' id='feedlist'></Link>
    <Link to='/donatelist' id='donatebk'></Link>
    </>
  );
}

export default AdminDashboard;
