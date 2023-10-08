import React, { useState } from 'react';
import '../Seller/Donate.css'
import '../Seller/bg.jpg'
import { DonateBooks, loc } from '../Server/UserServer';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
export const DonateForm=()=> {

  const [donate ,setdonate]=useState({
    
    donBook:"",
    donQuantity:"",
    donAuthor:"",
    donDiscripation:"",
	  email:localStorage.getItem("id")
  })

    const donatebook=(event)=>{
      const name = event.target.name;
      const value =event.target.value;
      setdonate({...donate ,[name]:value});
      // console.log(donate);
    }
 const Donatesub =async(event)=>{
  event.preventDefault();
  // console.log(donate);

    if(loc)
    {
      // console.log(donate);
        console.log("inside if");
        if(donate.donQuantity !== ""&&  donate.donBook !== "" && donate.donAuthor!== "" )

        {
            // console.log("inside second if");
            toast.success("Book Added successfully");
            console.log(donate);
             (await DonateBooks(donate))
            
            window.location.href="/donate"
        }
        else
        {
            toast.error("fill the details");
        }
        
    }
    else
    {
        
        toast.error("login first");
        window.location.href="/login";
    }
    }
  

  return (
    <section className='donate'>
      <div className="donatesec">
        <form action="">
          <div><h1>Donate Book</h1></div>
          <div className="Sell-box">
            <input type="text" value={donate.donBook} onChange={donatebook} name="donBook" required />
            <label>Book Name :</label>
          </div>
          <div className="Sell-box">
            <input type="number" value={donate.donQuantity} onChange={donatebook} name="donQuantity" required />
            <label>Quantity of Books :</label>
          </div>
          <div class="Sell-box">
                <input type="email" value={donate.donAuthor} onChange={donatebook} name="donAuthor" required/>
                <label htmlFor="">Book Author :</label>
            </div>
          
          
          <div class="Sell-box">
                <input type="text" placeholder='its optional' value={donate.donDiscripation} onChange={donatebook} name="donDiscripation"required />
                <label htmlFor="">Book Description :</label>
            </div>
          <button className="buttonn c-button" type="submit" onClick={Donatesub}> Add Book</button>
          <div className="Donate-link">
          <p> <Link to='/sell'>Sell Book?</Link> </p>
          </div>
        </form>
        <ToastContainer/>
      </div>
    </section>
  );
}

export default DonateForm;
