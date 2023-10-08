import React from 'react';
import { Link } from 'react-router-dom';

import '../DashBord/NavBar.css'
import SearchBar from './SearchBar';
import { adloc } from '../Server/UserServer';


//NavBar Page

export const NavBar=()=> {

  

   const logout=()=>{
        console.log("in the logout")
          localStorage.clear();
          console.log("logout");
          // <Navigate to="/login"/>
          window.location.href="/";
          console.log("this")
   }
  


  return (<>
  {/* <container 
   className='Mainfile' style={{backgroundColor: "rgb(6, 40, 56)",height:"80px"}}>
        <div className="logo">
            <h2> BOOKSHACK</h2>
        </div>
        <div className="menu">
            <ul>
               
            <Link to="/" className="">Home</Link>
            <Link to="#" className="Book a  Table">Donate</Link>
              

             { (localStorage.getItem("id")) ?  
             <Link   id='logout' onClick={logout} >Logout</Link>:
             <Link to="/login" className="Menu" id='login'> Login</Link> }
            { (localStorage.getItem("id")) ?
            
            <Link to={"/profile"} id='pro' style={{color:"white"}}>  {localStorage.getItem("id")} </Link>:
            <Link to="/signup" className="contact Us" id='sign'>Sign Up</Link> }
        </ul>

        </div>

   
    </container> */}







     
   <nav style={{backgroundColor: "rgb(6, 40, 56)",height:"80px"}}>
        <div class="logo">
            <h2> BOOKSHACK</h2>
        </div>
        <SearchBar/>
        <div class="menu">
            <ul className='ul1'>
             {/* { (localStorage.getItem("id")=="")    ? */}
            <Link to="/" class="home">Home</Link>
            <Link to='/donate'>Donate</Link>
             {/* } */}
            { (localStorage.getItem("id") || adloc ) ?  
             <Link   id='logout' onClick={logout} >Logout</Link>:
             <Link to="/login" className="Menu" id='login'> Login</Link> }
            { (localStorage.getItem("id") || adloc) ?
            
            <Link to={"/profile"} id='pro' style={{color:"white"}}>  Profile </Link>:
            <Link to="/signup" className="contact Us" id='sign'>Sign Up</Link> }
            
        </ul>

        </div>

        <div>
        <img style={{marginTop: "0px"}} src='' alt="" className='ctlIMG'/>
        </div>

    </nav>
    </>

    
  )
};
