import React, { useEffect, useState } from 'react';
import '../Buyer/Sublist.css';
import { Link ,useNavigate } from 'react-router-dom';
import { CataCard } from './CataCard';
import axios from 'axios';
import { bkt, server } from '../Server/UserServer';

export const Civil = () => {
    const [arr, setArr] = useState([]);

  useEffect(() => {



    
    const storedData = localStorage.getItem("civil");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setArr(parsedData);
      
      
    }
  
  }, []);

  const navigate= useNavigate();
  const toNextView=(data)=>{
            navigate('/view',{state:{data}});
  }

  console.log('good in subj');
  const image=()=>{
    console.log(bkt);
axios.get(`${server}/image/${bkt}`).then((response)=>{

  console.log(response.data);
    localStorage.setItem("imge", JSON.stringify(response.data))
})

  }
   
return (<>
        <section className='secSub'>
            
                <div className="arrivals">
                    <h1 style={{color:"black"}}>Civil Book</h1>
                    <div className="arrivals_box">
                    {arr.map((info) => (
                        <div className="arrivals_card"  key={info.bookName}>
                            <div className="arrivals_tag">
                                <h2>{info.bookName}</h2>
                                <div className="arrivals_icon">
                                  {localStorage.setItem("bokid",info.bookId)}
                                  <p className='awd'>Book Author : {info.bookAuthor}</p>
                                  <p className='awd'>Book Edition : {info.edition}</p>
                                  <p className='awd'>Book Condition :{info.bookCondition}</p>
                                   <p className='awd'>Price {info.actualPrice}</p>
                                  
                                </div>
                                <button  onClick={() => {
                                      image();

                                      setTimeout(() => {
                                        toNextView(info);
                                    }, 3000); 
                                  }} className="arrivals_btn"
                                 
                             >View more</button>
                            </div>
                        </div> 
                    ))} </div>
                </div>
          
        </section>
        </>);
    
};
