import React, { useState, useEffect } from 'react';
import '../Registration/Profile.css';
import axios from 'axios';
import { server } from '../../Server/UserServer';
import { ToastContainer, toast } from 'react-toastify';




export const Editprofile = () => {
  const [info, setInfo] = useState({});
  const [updatedInfo, setUpdatedInfo] = useState({}); 
  const loc = localStorage.getItem("id");

  useEffect(() => {
    axios.get(`${server}/getprofile/${loc}`)
      .then((resp) => {
        setInfo(resp.data);
        setUpdatedInfo(resp.data);

      })
      .catch((error) => {
        
        toast.error("Profile not update");
      });
  }, [loc]);

  const editProfile = () => {
  if( updatedInfo.fullName !=="" && updatedInfo.contactNo !=="" && updatedInfo.address!=="" && updatedInfo.city !=="" && updatedInfo.state !=="" && updatedInfo.pincode !=="")
    {
  
    axios.put(`${server}/updateprofile/${loc}`, updatedInfo)
      .then((response) => {
        setInfo(updatedInfo); 
        toast.success("PRofile is updated");
        
          window.location.href="/profile"
       
        
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        toast.error("fill the all data")

      });
      toast.success("Profile is updated");
}
else
{
  toast.error("fill the all data")
}
};

  const changeInput = (event) => {
    const { name, value } = event.target;
    setUpdatedInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };


    return(
        <>
        

        <div className='secSign'>
    <div className="Edit-det">
        <form action="">
            <div><h1 className='signH'>Edit Profile</h1></div>
            <div className="Input-Sign">
                <span className="icon"><i className="fa-solid fa-user"></i></span>
                <input className='signinput' type="text" value={updatedInfo.fullName} onChange={changeInput} name="fullName" required/>
                <label className='signleb' htmlfor="">Full Name :</label>
            </div>
            <div className="Input-Sign">
                <span className="icon"><i className="fa-solid fa-phone"></i></span>
                <input className='signinput' type="text" value={updatedInfo.contactNo} onChange={changeInput} name="contactNo"  required/>
                <label className='signleb' htmlfor="">Contact No :</label>
            </div>

            <div className="Input-Sign">
                <span className="icon"><i className="fa-solid fa-location-dot"></i></span>
                <input className='signinput' type="text" value={updatedInfo.address} onChange={changeInput} name="address" required />
                <label className='signleb' htmlfor="">Address:</label>
            </div>
            <div className="Input-Sign">
                <span className="icon"><i className="fa-solid fa-city"></i></span>
                <input className='signinput' type="text" value={updatedInfo.city} onChange={changeInput} name="city" required />
                <label className='signleb' htmlfor="">City :</label>
            </div>
            <div className="Input-Sign">
                <span className="icon"><i className="fa-solid fa-map-location-dot"></i></span>
                <input className='signinput' type="text" value={updatedInfo.state} onChange={changeInput}  name="state" required />
                <label className='signleb' htmlfor="">State :</label>
            </div>
            <div className="Input-Sign">
                <span className="icon"><i className="fa-solid fa-thumbtack"></i></span>
                <input className='signinput' type="text" value={updatedInfo.pincode} onChange={changeInput} name="pincode" required />
                <label className='signleb' htmlfor="">Pin Code:</label>
            </div>
            
           
            
            <button className=" buttonn c-button" type="submit" onClick={editProfile}>Edit Profile</button>
            
            <ToastContainer/>
        </form>
       
    </div>
  
</div>
        </>
    );
};

