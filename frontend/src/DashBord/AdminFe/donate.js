import React, { useEffect, useState } from 'react';
import '../AdminFe/BookDetails.css';
// import { NavBar } from './NavBar';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { server } from '../../Server/UserServer';
import { ToastContainer, toast } from 'react-toastify';
 export const Donate = () => {
  const [set,sser]=useState([]);
  // const locatedata = useLocation();

  // console.log(locatedata)

  // const newd= locatedata.state;
  //   sser(newd)

 

    useEffect(() => {



    
      const storedData = localStorage.getItem("donatet");
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        sser(parsedData);
        
        
      }
    
    }, []);


  return (
    <>
    {/* <NavBar/> */}

  
    <div className="container1">
      <table>
        <ToastContainer/>
        <thead>
          <tr>
            <th>Seller Email</th>
            <th>Book Name</th>
            <th>Ouantity</th>
            <th>Authorn</th>
            <th>Siscripatoin</th>
            <th>Book Id</th>
           
          </tr>
        </thead>
        
        {set.map((info)=>(
          <tbody>
            <tr>
              <td>{info.email}</td>
              <td>{info.donBook}</td>
              <td>{info.donQuantity}</td>
              <td>{info.donAuthor}</td>
              <td>{info.donDiscripation}</td>
              
              <td>{info.donId}</td>
              
              
            </tr>
           
            
          </tbody>

     ) )}
      </table>
    </div>
    </>
  );
};

export default Donate;
