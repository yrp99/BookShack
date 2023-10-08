import React, { useEffect, useState } from 'react';
import Swiper from 'swiper';
import '../Buyer/Branch.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import Cs from '../Buyer/Cs.jpg'
import che from '../Buyer/che.jpg'
import civil from '../Buyer/civil.jpg'
import it from '../Buyer/it.jpg'
import mec from '../Buyer/mec.jpg'
import Slider from 'react-slick';
import { Link ,useNavigate } from 'react-router-dom';
import { server } from '../Server/UserServer';
import axios from 'axios';
export const Branch = () => {
  const settings = {
    dots: true,
    infinite: true,
    // speed: 1000,
    slidesToShow: 2,
    // slidesToScroll: 1,
    autoplay: true,
    // autoplaySpeed: 1000,
    
  };
  const sliderRef = React.useRef(null);

  const handleNextSlide = () => {
    sliderRef.current.slickNext();
  };

  const handlePrevSlide = () => {
    sliderRef.current.slickPrev();
  };
  const navigat=useNavigate('');


  // code logic code 

  const [mecs ,setmec]=useState(''); 


  const handlemec =()=>{
    // let selectType = "Engineering";
    let branch ='Mechanical';
    const obb= {branch};
    console.log(branch);
    

      axios.get(`${server}/Engineeringbook/${branch}`).then((response) => {
      
        localStorage.setItem("mech", JSON.stringify(response.data));
        // anotherFunction(JSON.stringify(response.data));
        document.getElementById("mee1").click();
      });
      

  }



  const handlecivil =()=>{
    // let selectType = "Engineering";
    let branch ='Civil';
    const obb= {branch};
    console.log(obb)
  
    axios.get(`${server}/Engineeringbook/${branch}`).then((response) => {

        const viewbooks = response.data;
        localStorage.setItem("civil", JSON.stringify(response.data));
        document.getElementById("mee2").click();

      });


  }
const handlecs =()=>{
    // let selectType = "Engineering";
    let branch ='CS';
    const obb= {branch};
    console.log(obb)
    axios.get(`${server}/Engineeringbook/${branch}`).then((response) => {

        const viewbooks = response.data;
        console.log(viewbooks);
        localStorage.setItem("csbook", JSON.stringify(response.data));
        document.getElementById("mee3").click();

      });

  }

  

  const handleit =()=>{
    // let selectType = "Engineering";
    let branch ='IT';
    const obb= {branch};
    axios.get(`${server}/Engineeringbook/${branch}`).then((response) => {

        const viewbooks = response.data;
        localStorage.setItem("itbook", JSON.stringify(response.data));
        document.getElementById("mee4").click();

      });

  }

  const handleche =()=>{
    // let selectType = "Engineering";
    let branch ='Chemical';
    const obb= {branch};
    axios.get(`${server}/Engineeringbook/${branch}`).then((response) => {

        const viewbooks = response.data;
        localStorage.setItem("chemical", JSON.stringify(response.data));
        document.getElementById("mee5").click();

      });

  }



  return (
    <div className=" swiper  ">
      <Slider {...settings} className='BOD'>
        <div className="card">
          <div className="image-content">
            <div className="overlay"></div>
            <div className="card-image">
              <img src={mec} alt="Mechanical" className="card-img" />
            </div>
          </div>
          <div className="card-content">
            <h1 className="name">Mechanical</h1>
            <button className="button" onClick={ 
            handlemec 
              }>Mechanical</button>
                  </div>
        </div>
      
        <div className="card">
          <div className="image-content">
            <span className="overlay"></span>
            <div className="card-image">
              <img src={civil} alt="Civil" className="card-img" />
            </div>
          </div>
          <div className="card-content">
            <h1 className="name">Civil</h1>
            <button className="button" onClick={handlecivil}>Civil</button>
            {/* <button className="button">View</button> */}
          </div>
        </div>

        <div className="card">
          <div className="image-content">
            <span className="overlay"></span>
            <div className="card-image">
              <img src={Cs} alt="CS" className="card-img" />
            </div>
          </div>
          <div className="card-content">
            <h1 className="name">CS</h1>
             <button className="button" onClick={handlecs}>CS</button>

          </div>
        </div>

        <div className="card">
          <div className="image-content">
            <span className="overlay"></span>
            <div className="card-image">
              <img src={it} alt="IT" className="card-img" />
            </div>
          </div>
          <div className="card-content">
            <h1 className="name">IT</h1>
            <button className="button" onClick={handleit}>IT</button>

          </div>
        </div>

        <div className="card">
          <div className="image-content">
            <span className="overlay"></span>
            <div className="card-image">
              <img src={che} alt="Chemical" className="card-img" />
            </div>
          </div>
          <div className="card-content">
            <h1 className="name">Chemical</h1>
            <button className="button" onClick={handleche}>Chemical</button>

          </div>
        </div>
      </Slider>
      <Link to='/branch' id='mee1'></Link>
      <Link to='/civil' id='mee2'></Link>
      <Link to='/cssbra' id='mee3'></Link>
      <Link to='/it' id='mee4'></Link>
      <Link to='/chemical' id='mee5'></Link>
    </div>
  );
};

export default Branch;


// npm install react-slick slick-carousel