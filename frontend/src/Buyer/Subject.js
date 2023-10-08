import React, { useEffect } from 'react';
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
import { Link } from 'react-router-dom';
export const Subject = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    
  };

  return (
    <div className=" swiper ">
      <Slider {...settings} className='subsub'>
        <div className="card">
          <div className="image-content">
            {/* <div className="overlay"></div> */}
            <div className="card-image">
              <img src={mec} alt="Mechanical" className="card-img" />
            </div>
          </div>
          <div className="card-content">
            <h1 className="name">Mechanical</h1>
           <Link to ='/subject'> <button className="button">View</button></Link>
          </div>
        </div>

        <div className="card">
          <div className="image-content">
            {/* <span className="overlay"></span> */}
            <div className="card-image">
              <img src={civil} alt="Civil" className="card-img" />
            </div>
          </div>
          <div className="card-content">
            <h1 className="name">Civil</h1>
            <button className="button">View</button>
          </div>
        </div>

        {/* <div className="card">
          <div className="image-content">
            <span className="overlay"></span>
            <div className="card-image">
              <img src={Cs} alt="CS" className="card-img" />
            </div>
          </div>
          <div className="card-content">
            <h1 className="name">CS</h1>
            <button className="button">View</button>
          </div>
        </div> */}

        {/* <div className="card">
          <div className="image-content">
            <span className="overlay"></span>
            <div className="card-image">
              <img src={it} alt="IT" className="card-img" />
            </div>
          </div>
          <div className="card-content">
            <h1 className="name">IT</h1>
            <button className="button">View</button>
          </div>
        </div> */}

        {/* <div className="card">
          <div className="image-content">
            <span className="overlay"></span>
            <div className="card-image">
              <img src={che} alt="Chemical" className="card-img" />
            </div>
          </div>
          <div className="card-content">
            <h1 className="name">Chemical</h1>
            <button className="button">View</button>
          </div>
        </div> */}
      </Slider>
    </div>
  );
};

// export default Subject;
