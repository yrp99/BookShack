import React, { useEffect, useState } from 'react';
import '../AdminFe/Suggestion.css';
import { toast } from 'react-toastify';
import { server } from '../../Server/UserServer';
import axios from 'axios';
// import { NavBar } from './NavBar';

const Suggestion = () => {
  const [set,sarr]=useState([]);


  // const refresh =()=>{
  //   window.location.reload(true);
  // }

    useEffect(() => {



    
      const storedData = localStorage.getItem("feedback");
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        sarr(parsedData);
        
        
      }
    
    }, []);


  
  
    
  return (
    <>
    {/* <NavBar/> */}
    <div className="container10">
      <table>
        <thead>
          <tr>
            <th>Suggestion Id</th>
            <th>User Name</th>
            <th>User Email</th>
            <th>Suggestions</th>
          </tr>
        </thead>
        {set.map((info)=>(
        <tbody>
          <tr>
            <td>{info.suggestionId}</td>
            <td>{info.name}</td>
            <td> {info.email}</td>
            <td> {info.message}</td>
          </tr>
         
         
         
          
        </tbody>
          ) )}
      </table>
    </div>
    </>
  );
};

export default Suggestion;
