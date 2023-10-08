import React, { useEffect, useState } from 'react'
import '../DashBord/Header.css';
import Img from '../DashBord/giphy.gif'
import { Services } from './Services/Services';
import axios from 'axios';
import { server } from '../Server/UserServer';
import { motion } from 'framer-motion';

//header page

export const Header=()=> {
  
    
    const loc = localStorage.getItem("id");
  
  return (
    <>
      <div className='intro'>
        <div className='i-left'>
           <motion.div 
             initial={{ scale: 0 }}
             animate={{ rotate: 360, scale: 1 }}
             transition={{
               type: "spring",
               stiffness: 260,
               damping: 20
             }}
           className='i-name'>
            <span>BOOK</span>
            <span>SHACK</span>
            <span>Provide you the opportunity to buy and sell your books.
            </span>
           </motion.div>
               {/* <button className=' button i-button'>About Us </button>  */}
        </div>
        <motion.div
        
        className='i-right'>
            <img src={Img}/>
        </motion.div>
        
      </div>
     {/* <Services/> */}
     <Services/>
     






    </>
  )
}

