import React, { useState } from 'react'
import '../DashBord/Card/Card.css';
import '../Buyer/Catagpage.css';
import '../DashBord/Services/Services.css'
//image not imported
// import { motion } from 'framer-motion';
import novel from '../Buyer/Novels.jpg'
import engg from '../Buyer/engg.jpg'
import comic from '../Buyer/Comic-Books.jpg'
import Img from '../Buyer/Cs.jpg'
import { Link, json ,useNavigate } from 'react-router-dom';

import { motion } from 'framer-motion';
import CataCard from './CataCard';

import { server } from '../Server/UserServer';
import axios from 'axios';
import selectType from './SelectType';



export const Catagpage = () => {

  const handlecomic =()=>{
    let selectType = "Comic";
    const obb= {selectType};
      axios.get(`${server}/bookscata/${selectType}`).then((response) => {
        const viewbooks = response.data;
        localStorage.setItem("comicsbook", JSON.stringify(response.data));
        document.getElementById("oo").click();
      });

  }


  const handlenovel = () => {
    let selectType ="Novel"

      
      const obj3={selectType}
     //const selectT={selectType:category}
     axios.get(`${server}/bookscata/${selectType}`).then((response) => {
      const viewbooks = response.data;
        localStorage.setItem("novelsbook", JSON.stringify(response.data));
      });

      document.getElementById("Dnovel").click();
     
    }
 

  return (
    <>
    <contanier>
      <div className='servicesCata'>
        <div className='cards'>
          <motion.div
            className="cardbox"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            style={{ left: '32rem', top: "6rem" }}
          >
            <div className='photo'>
              <img src={engg} alt=''/>
              <h2>Engineering Books</h2>
              <button className='buttonn c-button'>
                <Link to='/Engineering'>View</Link>
              </button>
            </div>
          </motion.div>
          <motion.div
            className="cardbox"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            style={{ top: '6rem', left: '1rem'}}
          >
            <div className='photo'>
              <img src={novel} alt=''/>
              <h2>Novels Books</h2>
              <button
                className='buttonn c-button'
                onClick={handlenovel}
              >
                View
              </button>
            </div>
          </motion.div>
          <motion.div
            className="cardbox"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            style={{ top: '6rem', left: '62rem' }}
          >
            <div className='photo'>
              <img src={comic} alt=''/>
              <h2>Comic Books</h2>
              <button
                className='buttonn c-button'
                onClick={handlecomic}
              >view
                
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      <Link to='/comic' id='oo'></Link>
     <  Link to='/Novels' id='Dnovel'  ></Link>
     </contanier>
    </>
  );
  };



