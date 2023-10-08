import React, { useEffect, useState } from 'react';
import '../AdminFe/BookDetails.css';
// import { NavBar } from './NavBar';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { server } from '../../Server/UserServer';
import { ToastContainer, toast } from 'react-toastify';
 export const BookList = () => {
  const [set,sser]=useState([]);
  // const locatedata = useLocation();

  // console.log(locatedata)

  // const newd= locatedata.state;
  //   sser(newd)

  const refresh =()=>{
    window.location.reload(true);
  }

    useEffect(() => {



    
      const storedData = localStorage.getItem("booklist");
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        sser(parsedData);
        
        
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

  
    <div className="container1">
      <table>
        <ToastContainer/>
        <thead>
          <tr>
            <th>Seller Name</th>
            <th>Book Name</th>
            <th>ISBN Number</th>
            <th>Book Edition</th>
            <th>Type of Book</th>
            <th>Book Condition</th>
            <th>Book Description</th>
            <th>Actual Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        
        {set.map((info)=>(
          <tbody>
            <tr>
              <td>{info.email}</td>
              <td>{info.bookName}</td>
              <td>{info.isbnNumber}</td>
              <td>{info.bookAuthor}</td>
              <td>{info.edition}</td>
              <td>{info.selectType}</td>
              <td>{info.bookDescription}</td>
              <td>{info.actualPrice}</td>
              <td className="button-container">
                <button className="button delete-button"  onClick={() =>{deletebook(info.bookId);
                  
                  refresh();}}
                  >Delete</button>
              </td>
            </tr>
           
            
          </tbody>

     ) )}
      </table>
    </div>
    </>
  );
};

export default BookList;
