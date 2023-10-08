import React, { useEffect, useState } from 'react'
import '../Buyer/View.css'
// import { Helmet } from 'react-helmet';
import { Link , useLocation} from 'react-router-dom';
import axios from 'axios';
import { server } from '../Server/UserServer';


export const ViewBook =()=> {

  const [arr, setArr] = useState([]);
  // const[bkdet,setbkdet]=useState([]);
  ;

    const locatedata = useLocation();

    // console.log(bkdet)

    useEffect(()=>{
      const storedData = localStorage.getItem("imge");
      
        const parsedData = JSON.parse(storedData);
        setArr(parsedData);
        console.log("arrdetails "+arr.image1);
       
    },[])
   
  return (
    <>
   
   <Link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"/>
    
   {/* {bkdet.map((info) => ( */}
    <div className="main-wrapper" >
  <div className="containerView">
    <div className="product-div">
      <div className="product-div-left">
      <div className="product-div-left">
         <div className="img-container">
          <img className='asdes' src={`http://localhost:8080/images/${arr.image1}`} alt="" />
        </div>
        <div className="hover-container">
          <div>
            <img src={`http:// localhost:8080/images/${arr.image2}`} alt="" />
          </div>
          <div>
            <img src={`http:// localhost:8080/images/${arr.image3}`} alt="" />
          </div>
          <div>
            <img src={`http:// localhost:8080/images/${arr.image4}`} alt="" />
          </div>
          <div>
            <img src={`http:// localhost:8080/images/${arr.image5}`} alt="" />
          </div>
          
        </div>
      
         </div>  
          
        </div>
      </div>
      <div className="product-div-right">
        <span className="product-name">Book Name : {locatedata.state.data.bookName}</span>
        <span className="product-price">Author : {locatedata.state.data.bookAuthor} </span>
        <span className="product-price">ISBN Number : {locatedata.state.data.isbnNumber} </span>
        <span className="product-price">Edition : {locatedata.state.data.edition} </span>
        <span className="product-price">Condition : {locatedata.state.data.bookCondition} </span>
        <p className="product-price">Description : {locatedata.state.data.bookDescription} </p>
        <span className="product-price">Price : {locatedata.state.data.actualPrice} </span>
        
          
         
       
        <div className="btn-groups">
          {/* <button type="button " className="add-cart-btn">
            <i >add to cart</i>
          </button> */}
          <button type="button " className="buy-now-btn"   initial={{ opacity: 0.6 }}
  whileHover={{
    scale: 1.2,
    transition: { duration: 1 },
  }}
  whileTap={{ scale: 0.9 }}
  whileInView={{ opacity: 1 }}>
            <i >buy now</i>
          </button>
        </div>
      </div>
    </div>
  </div>
{/* </div> */}
      {/* ))}  */}

    </>
  )
}


