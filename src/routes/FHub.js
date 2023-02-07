import React from "react";
import { BubblyLink } from "react-bubbly-transitions";
import { Link } from "react-router-dom";
import Roll from 'react-reveal/Roll';
import Fade from 'react-reveal/Fade';
import { Nav } from "../components/Navbar";

export default function FHub(props) {
    const { darkTheme, setDarkTheme } = props;
  const activeTheme = darkTheme
    ? { backgroundColor: "#1a1a1a", color: "#fff" }
    : { backgroundColor: "white", color: "#1a1a1a" };
  return (
    <>
      <Nav darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <div className="row m-0 p-0 h-100" style={activeTheme}>
        <div className="col-md-11 order-md-1 order-2">
        <Fade top duration={2000}>
          <div className="row m-0 p-0 card shadow-lg bg-gradient" style={activeTheme}>
            <div className="row">
            <div className="col-md-8 px-md-5 py-3 m-0">
             <div className="" style={activeTheme}>
                <div className="p-2">
                    <img src="./fhub.png" class="bg-gradient border-secondary border-opacity-50 card-img-top img-flid p-2" alt="Project-1" style={activeTheme}/>
                </div>
                <div class="card-body">
                  <h4 class="card-title">Blue Tagged Clothing</h4>
                  <br/>
                  <p class="card-text">The app is built using <b>React.JS</b> for the front-end, which provides an interactive and user-friendly interface. <b>Express.JS and Node.JS</b> handle the server-side logic and database operations are managed using <b>MongoDB.</b> <br/> <br/>The platform provides a seamless shopping experience for all users who are looking to purchase branded clothing and accessories.</p>
                </div>
              </div>

            </div>
            <div className="col-md-4 px-md-4 py-3 m-0 bg-gradient" style={activeTheme}>
                <h5>Key Features:</h5> <br/>
                <ul>
                    <li><p><b>User authentication:</b> Users can sign up and log in securely to the platform.</p></li>
                    <li><p><b>Product browsing:</b> A comprehensive list of products, including clothing and accessories from popular brands, can be easily browsed by the users.</p></li>
                    <li><p><b>Shopping Cart:</b> Users can add items to their cart and proceed to checkout.</p></li>
                    <li><p><b>Payment gateway integration:</b> Secure payment options such as credit card and PayPal are available for making purchases.</p></li>
                    <li><p><b>Order tracking:</b> Users can track the status of their orders, from the placement to the delivery.</p></li>
                    <li><p><b>Admin panel:</b> Admins can manage the product catalog, process orders, and manage customer data.</p></li>
                    <li><p><b>WARNING: Hosted on free version so it might take longer to load.</b></p></li>
                    <li><p><b>Live Demo:</b> <a target="_blank" href="https://fhub.herokuapp.com/">https://fhub.herokuapp.com/</a></p></li>
                </ul>
            </div>
          </div>
          </div>
          </Fade>
          <br/>
          <div className="row">
          <Fade left duration={2000}><div className="col-6 text-end"><span className="btn-outline text-decoration-none fw-semibold"><BubblyLink to="/projects"> <i class="bi bi-arrow-left fs-5"></i>My Projects </BubblyLink></span></div></Fade>
          <Fade right duration={2000}><div className="col-6 text-start"><span className="btn-outline text-decoration-none fw-semibold"> <BubblyLink to="/skills"> My Skills <i class="bi bi-arrow-right fs-5"></i> </BubblyLink></span></div></Fade>
          </div>
        </div>
        <div className="col-md-1 pt-4 order-md-3 order-3">
          <div className="row align-items-center justify-content-center h-100">
          <div className='row'>
          <div className='row'>
                        <div className='col-md-12 col mb-4 mx-md-0 mx-3 text-center'>
                            <Roll right duration={2000} delay={2000}><span><a href='https://www.linkedin.com/in/rp97/'><i class="social-links bi bi-linkedin" style={{color: '#8f44fd'}}></i></a></span></Roll>
                        </div>
                        <div className='col-md-12 col mb-4 mx-md-0 mx-3 text-center'>
                            <Roll right duration={2000} delay={2000}><a href="https://github.com/ronak149"><i class="social-links bi bi-github rounded-circle" style={{color: '#8f44fd'}}></i></a></Roll>
                        </div>
                        <div className='col-md-12 col mb-4 mx-md-0 mx-3 text-center'>
                            <Roll right duration={2000} delay={2000}><a href="https://www.instagram.com/ronak.patel49/"><i class="social-links bi bi-instagram" style={{color: '#8f44fd'}}></i></a></Roll>
                        </div>
                        <div className='col-md-12 col mb-4 mx-md-0 mx-3 text-center'>
                            <Roll right duration={2000} delay={2000}><a href="https://www.instagram.com/ronak.patel49/"><i class="social-links bi bi-facebook" style={{color: '#8f44fd'}}></i></a></Roll>
                        </div>
                        </div>
                        </div>
          </div>
        </div>
      </div>
    </>
  )
}
