import React, { useEffect, useState } from 'react';
import '../Registration/MySelledBooks.css'
import axios from 'axios';
import { server } from '../../Server/UserServer';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';

 export const MySelledBooks = () => {
  const [arr, setArr] = useState([]);
    const refresh =()=>{
      window.location.reload(true);
    }

  useEffect(() => {

      

    
    const storedData = localStorage.getItem("selledbook");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setArr(parsedData);
      
      
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
    <div className="container10">
      <ToastContainer/>
      <table>
        <thead>
          <tr>
            <th>Book Name</th>
            <th>ISBN Number</th>
            <th>Book Author</th>
            <th>Book Edition</th>
            <th>Book Type</th>
            <th>Book Description</th>
            <th> Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        {arr.map((info)=>(
        <tbody>
          <tr>
            <td>{info.bookName}</td>
            <td>{info.isbnNumber}</td>
            <td>{info.bookAuthor}</td>
            <td>{info.edition}</td>
            <td>{info.selectType}</td>
            <td>{info.bookDescription}</td>
            <td>{info.actualPrice}</td>
            <td className="button-container">
              <button className="button delete-button"  onClick={() =>{deletebook(info.bookId);
                
                refresh();}}>Delete</button>
            </td>
          </tr>
         
          
        </tbody>
      
        ))}
      </table>
      <Link to="/profile" id='delbook'></Link>
    </div>
    </>
  );
};

export default MySelledBooks;
