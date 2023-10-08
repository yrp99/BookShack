import React from 'react'
import '../Contact/Contact.css'
export const Contact=()=> {
  return (
     <>
     
        <div className='contact-form'>
            <div className='w-left'>
                <div className='awesomes'>
                    <span>Get in Touch</span> 
                    <span>Contact Us</span>
                    {/* <div className='blur s-blurl' style={{background:"#ABF1FF94"}}></div> */}
                    
                    </div>
            </div>
            <div className='c-right'>
                <from>
                    <div className='c-c-right'>
                    <div>
                    <label className='mass1'>Name :</label><br/>
                <input type='text' name='User_name' className='user' placeholder='Name'/>
                </div>
                <div>
                <label className='mass1'>Email :</label><br/>
                <input type='email' name='email_name' className='user' placeholder='Email'/><br/>
                </div>
                </div>
                <label className='mass2'>Message : </label><br/>
                <textarea name='massage' className='users' placeholder='Message'/><br/>
                <input type='submit' value='Send' className='button co-button'/><br/>
                <div className='blur s-blurl' style={{background:"#ABF1FF94"}}></div>

                </from>
            </div>
           
        </div>
        
     </>
  )
}

