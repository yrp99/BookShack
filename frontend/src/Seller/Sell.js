import React, { useState } from "react"
import '../Seller/bg.jpg'
import '../Seller/Sell.css'
import { ToastContainer, toast } from "react-toastify";
// import axios from "axios";
import { AddBooks, loc, server } from "../Server/UserServer";
import { Link } from "react-router-dom";
import axios from "axios";

export const Sell=()=>{


    

    // const [selectedType, setSelectedType] = useState('');
    // const [schoolName, setSchoolName] = useState('');
  
    // const handleTypeChange = (event) => {
    //   setSelectedType(event.target.value);
    // };
  
    // const handleSchoolNameChange = (event) => {
    //   setSchoolName(event.target.value);
    // };

    const [obook ,setobook]  =useState({
        bookName:"",
        isbnNumber:"",
        bookAuthor:"",
        edition:"",
        selectType:"",
        bookCondition:"",
        bookDescription:"",
        actualPrice:"", 
        branch :"",
        email:localStorage.getItem("id"),
      
     
	
    });

   


    const bookdet=(e,field)=>{
  
        
        const Value=e.target.value
        // console.log("e.target.name"+ Name);

        setobook({...obook ,[field]:Value});
    }

    const addBook=(e)=>{


        e.preventDefault();

        console.log(obook);
    if(loc)
    {
        console.log("inside if");
        if(obook.actualPrice !="" && obook.bookAuthor !== "" && obook.bookCondition!== "" && obook.bookDescription!== "" && obook.bookName!== "" && obook.edition!== "" && obook.isbnNumber!== "" && obook.selectType!== ""  )

        {
            // console.log("inside second if");
            toast.success("Book Added successfully");

            //  ( AddBooks(obook))

            axios.post(`${server}/BookRegistration`,obook).then((Response)=>{
                    const vid=Response.data
                    console.log(vid);
                    localStorage.setItem("bbid",Response.data)
                    console.log ("bookId"+localStorage.getItem("bbid"))
            })
            window.location.href="/image"
            console.log(localStorage.getItem("bbid"));
            
            
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



    return(
        <>
        <section className='secSell'>
          <div className="Sell">
          <form action="">
            <div><h1 className='sellH'>Sell Book</h1></div>
            <div className="Sell-box">
                 {/* <span className="icon"></span>  */}
                <input type="text" value={obook.bookName} onChange={(e)=>bookdet(e,'bookName')}  required/>
                <label htmlFor="">Book Name :</label>
            </div>
            <div className="Sell-box">
                 {/* <span className="icon"></span>  */}
                <input type="text" value={obook.isbnNumber} onChange={(e)=>bookdet(e,'isbnNumber')}  required/>
                <label htmlFor="">ISBN Number :</label>
            </div>
            <div className="Sell-box">
                 {/* <span className="icon"></span>  */}
                <input type="text" value={obook.bookAuthor} onChange={(e)=>bookdet(e,'bookAuthor')}  required/>
                <label htmlFor="">Book Author :</label>
            </div>
            <div className="Sell-box">
                 {/* <span className="icon"></span>  */}
                <input type="text" value={obook.edition} onChange={(e)=>bookdet(e,'edition')}  required/>
                <label htmlFor="">Book Edition :</label>
            </div>
            <div className="sell">
                <label> Select Type :</label>
                <select id="type" value={obook.selectType} onChange={(e)=>bookdet(e,'selectType')} >
                <option value="">Select an option</option>
                <option value="Engineering">Engineering</option>
                <option value="Novel">Novel</option>
                <option value="Comic">Comic</option>
                </select>
            </div>

            {obook.selectType === 'Engineering' && (
                 <div className="sell">
                 <label> Select Type :</label>
                 <select id="type" value={obook.branch} onChange={(e)=>bookdet(e,'branch')} >
                 <option value="">Select an option</option>
                 <option value="Mechanical">Mechanical</option>
                 <option value="Civil">Civil</option>
                 <option value="CS">CS</option>
                 <option value="IT">IT</option>
                 <option value="Chemical">Chemical</option>
                 </select>
             </div>
                // <div className="Sell-box">
                
                // <input
                //     type="text"
                //     id="schoolName"
                //     value={obook.branch} onChange={(e)=>bookdet(e,'branch')} 
                //     // onChange={handleSchoolNameChange} 
                //      required
                //     />
                //     <label htmlFor="schoolName">Branch:</label>
                    
                //      </div>
                 )}

            <div className="sell">
                <label>Book Condition :</label>
                <input type="radio"id="new"  value="New" onChange={(e)=>bookdet(e,'bookCondition')}/>
                <label htmlFor=" new"> New</label>
                <input type="radio" id="good" value="Good" onChange={(e)=>bookdet(e,'bookCondition')}/>
                <label htmlFor="good">Good</label>
                <input type="radio"id="fair"  value="Fair" onChange={(e)=>bookdet(e,'bookCondition')}/>
                <label htmlFor="fair"> Fair</label>
            </div>
            
            
            <div className="Sell-box">
                 {/* <span className="icon"></span>  */}
                <input type="text" value={obook.bookDescription} onChange={(e)=>bookdet(e,'bookDescription')}  required/>
                <label htmlFor="">Book Description :</label>
            </div>
            
            <div className="Sell-box">
                 {/* <span className="icon"></span> */}
                <input type="number" value={obook.actualPrice} onChange={(e)=>bookdet(e,'actualPrice')}  required/>
                <label htmlFor=""> Price :</label>
            </div>
           
            <button className="buttonn c-button" type="submit" onClick={addBook} > Add Book</button>
            <div className="Donate-link">
                <p> 
                    <Link to="/donate">Donate</Link>
                </p>
            </div>
        <ToastContainer/>
            </form>
     </div>
    </section>
        </>
    )
}