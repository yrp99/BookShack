import React, { useEffect, useState } from 'react';
import '../AdminFe/UserDetails.css';
import axios from 'axios';
import { server } from '../../Server/UserServer';
import { ToastContainer, toast } from 'react-toastify';
// import { NavBar } from './NavBar';

const UserDetails = () => {

  const [arr, setArr] = useState([]);
  const refresh =()=>{
    window.location.reload(true);
  }

useEffect(() => {

    

  
  const storedData = localStorage.getItem("listuser");
  if (storedData) {
    const parsedData = JSON.parse(storedData);
    setArr(parsedData);
    
    
  }

}, []);

const deletebook=(dat)=>{
  console.log(dat)
  axios.delete(`${server}/admin/deletecustomer/${dat}`)
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
      <ToastContainer/>
      <table>
        
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Contact No</th>
            <th>Email</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>pin Code</th>
            <th>Actions</th>
          </tr>
        </thead>
        {arr.map((info)=>(
        <tbody>
          <tr>
            <td>{info.fullName}</td>
            <td>{info.contactNo}</td>
            <td>{info.email}</td>
            <td>{info.address}</td>
            <td>{info.city}</td>
            <td>{info.state}</td>
            <td>{info.pincode}</td>
            <td className="button-container">
              <button className="button delete-button"  onClick={() =>{deletebook(info.email);
                
                refresh();}}>Delete</button>
            </td>
          </tr>
         
          
        </tbody>
      
        ))}
      </table>
    </div>
    </>
  );
};

export default UserDetails;
