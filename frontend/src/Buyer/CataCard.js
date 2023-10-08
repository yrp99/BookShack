import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import { server } from '../Server/UserServer'
 export const CataCard =({emoji,heading,detail,data,link})=> {

  let selectType2="Novel";
  let scale = "sjadn";

  const obj = {selectType2,scale};
  const novel=async()=>{
       
    console.log( "asdfa " +obj);
     
    await axios.post(`${server}/books`,detail).then((response)=>{
      // console.log(response.data)
         const viewbooks = response.data;
        //  setbooks(viewbooks);
          localStorage.setItem("novelsbook",JSON.stringify(response.data))
        console.log( "detils"+detail);
  
    })
     


  return (
    <>
   <div className='photo'>
        <img src={emoji}/>
        <span>{heading}</span>
        <span>{detail}</span>
        <button  className=' button c-button'>{<Link to={link}>{data}</Link>}</button>
    </div>
    </>
  )
}
 }
export default CataCard;