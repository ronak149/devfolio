import React from "react";
import { BubblyLink } from "react-bubbly-transitions";
import { Link } from "react-router-dom";
import Roll from 'react-reveal/Roll';
import Fade from 'react-reveal/Fade';
import { Nav } from "../components/Navbar";

const Projects = (props) => {
  const { darkTheme, setDarkTheme } = props;
  const activeTheme = darkTheme
    ? { backgroundColor: "#1a1a1a", color: "#fff" }
    : { backgroundColor: "white", color: "#1a1a1a" };
  return (
    <>
      <Nav darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <div className="row m-0 p-0 h-100" style={activeTheme}>
        <div className="col-md-11 order-md-1 order-2">
          <div className="row g-3 m-0 p-0 align-items-center">
            <div className="col-md-4 p-md-4">
              <Fade left duration={2000}><div className="card shadow-lg bg-gradient" style={activeTheme}>
                <div className="py-3">
                    <img src="./fhub.png" class="bg-gradient border-secondary border-opacity-50 card-img-top img-flid p-2" alt="Project-1" style={activeTheme}/>
                </div>
                <div class="card-body p-4">
                  <br/>
                  <h4 class="card-title text-center bold">Blue Tagged Clothing</h4><br/>
                  <p class="card-text">Blue Tagged Clothing is a feature-rich e-commerce app developed using the <b> MERN Stack - React.JS, Express.JS, Node.JS and MongoDB.</b> The platform provides a seamless shopping experience for all users who are looking to purchase branded clothing and accessories.</p>
                  <br/><p className="text-center"><Link className="btn-outline p-2 px-4 text-decoration-none fw-semibold" to="/fhub">Read More </Link></p>
                </div>
              </div>
              </Fade>
            </div>
            <div className="col-md-4 p-md-4">
            <Fade top duration={2000}><div className="card shadow-lg bg-gradient py-2" style={activeTheme}>
                <div className="py-3">
                    <img src="./rent-ready.png" class="bg-gradient border-secondary border-opacity-50 card-img-top img-flid p-2" alt="Project-1" style={activeTheme}/>
                </div>
                <div class="card-body p-4">
                  <br/>
                  <h4 class="card-title text-center">Rent Ready</h4><br/>
                  <p class="card-text">The main goal of Rent Ready is to make the process of finding a rental property as simple and straightforward as possible. The website is built using <b> React, HTML, CSS, and Tailwind CSS, </b> providing a fast, responsive, and visually appealing interface for users. </p>
                  <br/><p className="text-center"><Link className="btn-outline p-2 px-4 text-decoration-none fw-semibold" to="/rent-ready">Read More </Link></p>
                </div>
              </div>
              </Fade>
            </div>
            <div className="col-md-4 p-md-4">
            <Fade right duration={2000}><div className="card shadow-lg bg-gradient" style={activeTheme}>
                <div className="py-3">
                    <img src="./yum-drop.png" class="bg-gradient border-secondary border-opacity-50 card-img-top img-flid p-2" alt="Project-1" style={activeTheme}/>
                </div>
                <div class="card-body p-4">
                  <br/>
                  <h4 class="card-title text-center">Yum Drop</h4><br/>
                  <p class="card-text">The platform is designed using HTML and CSS, providing a visually appealing interface and a fast and responsive user experience. Yum Drop aims to provide a convenient and reliable solution for users to order food from their favorite restaurants, without having to leave the comfort of their homes.</p>
                  <br/><p className="text-center"><Link className="btn-outline p-2 px-4 text-decoration-none fw-semibold" to="/yum-drop">Read More </Link></p>
                </div>
              </div>
              </Fade>
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="col-6 text-end"><span className="btn-outline text-decoration-none fw-semibold"><BubblyLink to="/"> <i class="bi bi-arrow-left fs-5"></i> About Me </BubblyLink></span></div>
            <div className="col-6 text-start"><span className="btn-outline text-decoration-none fw-semibold"> <BubblyLink to="/skills"> My Skills <i class="bi bi-arrow-right fs-5"></i> </BubblyLink></span></div>
          </div>
        </div>
        <div className="col-md-1 pt-4 order-md-3 order-3">
          <div className="row align-items-center justify-content-center h-100">
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
    </>
  );
};

export default Projects;
