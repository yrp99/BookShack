import React from 'react';
import '../DashBord/footer.css';
import { Link } from 'react-router-dom';
import { adloc } from '../Server/UserServer';
const Footer = () => {
  return (
    <div className='mainfooter'>
      {/* <footer className="page-footer"> */}
        <div className="containera">
          <a className="navbar-brand animated pulse d-block text-center m-0 p-0" href="#">
            {/* <img src="../media/brand/logo-light.svg" width="50" height="50" alt="Logo" /> */}
            <h3 style={{color:"white"}}>Bookshack</h3>
          </a>
          <div className="row">
            <div className="col-md-3">
              <h3 style={{color:"white"}}>HELP</h3>
              {/* <Link className="mb-0">Contact</Link><br/>*/}
               {   (adloc)  ?        
               <Link to='/dashbord' ><p style={{color:"white"}}>Home</p></Link>  : 
              <Link to='/adminlogin' ><p style={{color:"white"}}>Admin Login</p></Link>
              }
              {/* <Link to='/' ><p style={{color:"white"}}>Contact Us</p></Link> */}
              
              <p className="mb-0"></p>
              <p className="mb-0"></p>
              <p></p>
            </div>
            <div className="col-md-3 h-100 border-left-custom">
              <h3 className="page-footer-title mt-3 mt-md-0">LOCATION</h3>
              <address className='add'>
                It Park, Gayatri Nagar,<br />
                Nagpur.<br />
                Pin code: 444601<br />
                <abbr title="Phone">Phone:</abbr> (+91) 9763030710<br />
                <abbr title="Email">Email:</abbr> Bookshack@gmail.com
              </address>
            </div>
            <div className="col-md-3 h-100 border-left-custom">
              {/* <h5 className="page-footer-title mt-3 mt-md-0">FOLLOW US</h5> */}
              <div className="mb-3">
                {/* Contents */}
              </div>
            </div>
            <div className="col-md-3 h-100 border-left-custom">
              <h5 className="page-footer-title mt-3 mt-md-1">NEWSLETTER</h5>
              <p className='para'>
                Complete the form to receive information on the <br/>latest events,
                news and special offers at Bookshack.
              </p>
              <form id="newsletter-form">
                <label className="sr-only" htmlFor="formEmail">Email : </label>
                <input type="email" className="form-control form-control-sm rounded" id="formEmail" placeholder="name@example.com" /><br/><br/>
                <button type="submit" className="btn btn-sm btn-outline-light btn-block mt-2">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      {/* </footer> */}
      <a id="back-to-top" className="back-to-top smooth-scroll" href="#top">
        <i className="fa fa-long-arrow-up" aria-hidden="true"></i>
      </a>
    </div>
  );
};

export default Footer;
