



import React, { useState, useEffect } from 'react';
import '../Registration/Profile.css';
import axios from 'axios';
import { server } from '../../Server/UserServer';

import { Link ,useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
const ProfileComponent = () => {
  const [info, setInfo] = useState({});
  // const [record, setRecord] = useState({});
  const loc = localStorage.getItem("id");

  useEffect(() => {
    axios.get(`${server}/getprofile/${loc}`)
      .then((resp) => {
        const responseData = resp.data;
        setInfo(responseData); // Assuming response data is an object
        console.log(responseData);
        localStorage.setItem("kks",resp.data.fullName);
        const Uid=localStorage.setItem("del",resp.data.Id);
        console.log(Uid);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [loc]);

  console.log(info.customerId);

   const deleteAccount=()=>{
        axios.delete(`${server}/deletecustomer/${loc}`)
        .then((response)=>{
          const asa=response.data;
          console.log(asa);
          toast.success("Successfully Delete your account");
          window.location.href="/"
         
        })
        .catch((error)=>{
          console.error("error :" ,error);
          toast.error("Not deleted")
        })
  }

// const [arrr,setarrr]=useState({});
// const navigate=useNavigate();

const mysellbook=()=>{
  axios.get(`${server}/mySelledBooks/${loc}`).then((response)=>{
    console.log(response.data)

    localStorage.setItem("selledbook", JSON.stringify(response.data));

    // setarrr(response.data)
    // navigate('/sellbooks',{state:{response}});
  })
  document.getElementById("sellbook").click();
}
  // const toNextView=(data)=>{
  //   navigate('/sellbooks',{state:{data}});
    

// }


  return (
    <div className="main123">
      <div className="profile">
        <h1 className='p'> Profile</h1>
        {/* Display the fetched data */}
        <h2 className='p'> Name : {info.fullName}</h2>
        <h2 className='p'>Contact No: {info.contactNo}</h2>
        <h2 className='p'>E-mail: {info.email}</h2>
        
        <h2 className='p'>Address: {info.address}</h2>
        <h2 className='p'>City: {info.city}</h2>
        <h2 className='p'>State: {info.state}</h2>
        <h2 className='p'>Pin Code: {info.pincode}</h2>
        </div>
        <div className='inside'>

          
        <Link to="/edit"> <button className="EditProfilee" >Edit Profile</button></Link><br/>    
       
        <button className="MyselledBooks" onClick={mysellbook}
                                   >My Selled Books</button><br/>
         
        <button className="myOrder">My Orders</button><br/>
       
        <Link to="/"><button className="delete" onClick={deleteAccount}>delete my account</button></Link><br/>
       
      </div>
      <Link to='/sellbooks' id='sellbook'></Link>
    </div>
    // </div>
  );
};

export default ProfileComponent;

