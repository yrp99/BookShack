import React from 'react'
import '../DashBord/Card/Card.css';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { server } from '../Server/UserServer';
 const selectType =({emoji,heading,detail,data,link})=> {


      let selectType="Comic";
  let scale2 = "sjadn";

  const obj = {selectType,scale2};
  const comic=async()=>{
       
    console.log(obj);
     console.log("Detils"+detail)
    await axios.post(`${server}/books`,detail).then((response)=>{
      // console.log(response.data)
         const viewbooks = response.data;
        //  setbooks(viewbooks);
          localStorage.setItem("comicsbook",JSON.stringify(response.data))
        
  
    })
  
  }




  return (
    <>
    <div className='photo'>
        <img src={emoji}/>
        <h2>{heading}</h2>
        {/* <span>{detail}</span> */}
        <button  className=' button c-button'onClick={comic}>{<Link to={link}>{data}</Link>}</button>
    </div>
    </>
  )
}

export default selectType;