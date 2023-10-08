import React, { useState } from 'react'
import '../Services/Services.css';
import Emoji from '../Services/gp.jpg'
// import Cards from '../Card/Cards'
import sellimg from '../Services/sellbook.jpg'
import buyimg from '../Services/buybook.jpg'
import donate from '../Services/donatebook.jpg'
import '../Contact/Contact.css'
import iMg from '../Services/first-slider-unscreen.gif'
// import { Contact } from '../Contact/Contact';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import axios from 'axios';
import { server } from '../../Server/UserServer';
import { ToastContainer, toast } from 'react-toastify';


export const Services =()=> {

  const [user,setuser]=useState({
    name:"",
    email:"",
    message:"",
  });

  const Handledata = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    

    // console.log(name,value);

    setuser({...user ,[name]:value});
}

const handlesub = (e)=>{
  e.preventDefault();
 
  console.log(user);
 
  if(user.email!=="" && user.name !=="" && user.message !=="")
  {

      axios.post(`${server}/suggestions`,user).then((res)=>{
        console.log(res.data);
      })
      toast.success("Successfully");
      window.location.href="/"
     
  }
  else
  {
      toast.error("Fill the Details");
  }


}


  const transition = {duration:1, type:'spring'}


  return (
    <>
    {/* <contanier> */}
    <div className='servicesV'>
       
        <div className='scards'>

            <motion.div
           className='cardbox'
           whileHover={{ scale: 1.1 }}
           transition={{ type: "spring", stiffness: 400, damping: 10 }}
            
           style={{ left: '32rem', top: "6rem" }}
          >     
            <div className='photo'>
              <img src={buyimg} alt=''/>
              <h2>BUY</h2>
              <button className='buttonn c-button'>
                <Link to='/buy'>BUY</Link>
              </button>
            </div>
              
            </motion.div>
              <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className='cardbox'
               
              style={{ top: '6rem', left: '1rem' }}
              >
                <div className='photo'>
              <img src={sellimg} alt=''/>
              <h2>Sell</h2>
              <button className='buttonn c-button'>
                <Link to='/sell'>SELL</Link>
              </button>
            </div>
             
                 </motion.div>
              <motion.div
             className='cardbox'
             whileHover={{ scale: 1.1 }}
             transition={{ type: "spring", stiffness: 400, damping: 10 }}
             style={{ top: '6rem', left: '62rem' }}
             >
              <div className='photo'>
              <img src={donate} alt=''/>
              <h2>Donate  </h2>
              <button className='buttonn c-button'>
                <Link to='/donate'>DONATE </Link>
              </button>
            </div>
            
            </motion.div>

           


              </div>
              
              <div className='contact-form'>
                        <div className='w-left'>
                            <div className='awesomes'>
                                <span style={{color:"black"}}>Get in Touch</span> 
                                <span style={{color:"black"}}>Contact Us</span>
                                <ToastContainer/>
                                </div>
                        </div>
                        <div className='c-right'>
                            <from>
                    <div className='c-c-right'>
                    <div>
                    <label className='mass1'>Name :</label><br/>
                <input type='text' name='name' value={user.name} onChange={Handledata}  className='user' placeholder='Name'/>
                </div>
                <div>
                <label className='mass1'>Email :</label><br/>
                <input type='email' name='email'value={user.email} onChange={Handledata} className='user' placeholder='Email'/><br/>
                </div>
                </div>
                <label className='mass2'>Message : </label><br/>
                <textarea name='message' className='users' value={user.message}  onChange={Handledata} placeholder='Message'/><br/>
                <button className=" buttonn c-button" type="submit" onClick={handlesub}> Register</button>
                <div className='blur s-blurl' style={{background:"#ABF1FF94"}}></div>

                </from>
            </div>
           </div>
        </div>   
 {/* </contanier> */}
    </>
  )
}

