import React, { useEffect, useState } from 'react';
import '../AdminFe/OrderOfUser.css';
import axios from 'axios';
import { server } from '../../Server/UserServer';
import { toast } from 'react-toastify';
// import { NavBar } from './NavBar';

const OrderOfUser = () => {

  const [arr,sarr]=useState([]);


  const refresh =()=>{
    window.location.reload(true);
  }

    useEffect(() => {





    
      const storedData = localStorage.getItem("orderlist");
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        sarr(parsedData);
        
        
      }
    
    }, []);


    const deletebook=(dat)=>{
      console.log(dat)
      axios.delete(`${server}/bookbook/${dat}`)


      .then((response)=>{
        const asa=response.data;
        console.log(asa);
        toast.success("Successfully Delete your account");
        window.location.href="/dashbord"
        
        // document.getElementById("delbook").click();
        // window.location.reload(false);
      }
  
  
      )
  
      
      .catch((error)=>{
        console.error("error :" ,error);
        toast.error("Not deleted")
      })
    }

  return (
    <>
    {/* <NavBar/> */}
    <div className="container10">
      <table>
        <thead>
          <tr>
            <th>Order Id</th>
            <th>email</th>      
            <th>Book Author</th>
            <th>Book Id</th>
            <th>Book Name</th>
            <th>Book Edition</th>
            <th>Actual Price</th>
            <th>Actions</th>
          </tr>
        </thead>


        <tbody>
          <tr>
            <td>46545</td>
            <td>Prathmesh@gmail.com</td>
            <td>yyvhihk</td>
            <td>8520 </td>
            <td>DBMS</td>
            <td> 1st</td>
            <td>865</td>
            <td className="button-container">
              <button className="button delete-button" onClick={deletebook}>Delete User</button>
            </td>
          </tr>
          
          
          
        </tbody>
      </table>
    </div>
    </>
  );
};

export default OrderOfUser;
