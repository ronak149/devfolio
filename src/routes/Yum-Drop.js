import React from "react";
import { BubblyLink } from "react-bubbly-transitions";
import { Link } from "react-router-dom";
import Roll from 'react-reveal/Roll';
import Fade from 'react-reveal/Fade';
import { Nav } from "../components/Navbar";

export default function YumDrop(props) {
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
            <div className="col-md-8 p-md-5 m-0">
             <div className="" style={activeTheme}>
                <div className="p-2">
                    <img src="./yum-drop.png" class="bg-gradient border-secondary border-opacity-50 card-img-top img-flid p-2" alt="Project-1" style={activeTheme}/>
                </div>
                <div class="card-body">
                  <h4 class="card-title">Yum Drop</h4>
                  <br/>
                  <p class="card-text">Yum Drop is an online food ordering app designed using <b>HTML and CSS</b> as the frontend. The platform provides a convenient and user-friendly interface for users to browse menus, select their favorite dishes, and place orders from their favorite restaurants.</p>
                </div>
              </div>

            </div>
            <div className="col-md-4 p-md-4  m-0 bg-gradient" style={activeTheme}>
                <h5>Key Features:</h5> <br/>
                <ul>
                    <li><p><b>Restaurant listing: </b> Menu browsing: The platform provides a visually appealing interface for users to browse menus, view photos and descriptions of each dish, and select their desired items.</p></li>
                    <li><p><b>Menu browsing:</b> The platform provides a visually appealing interface for users to browse menus, view photos and descriptions of each dish, and select their desired items.</p></li>
                    <li><p><b>Menu browsing:</b> Once users have selected their items, they can proceed to place their order, which is sent directly to the restaurant.</p></li>
                    <li><p><b>Order tracking:</b> Users can track the status of their order, from placement to delivery.</p></li>
                    <li><p><b>Payment integration:</b> Yum Drop integrates with secure payment gateways to provide a seamless and secure ordering experience for users.</p></li>

                    <li><p><b>WARNING: Hosted on free version so it might take longer to load.</b></p></li>
                    <li><p><b>Live Demo:</b> <a target="_blank" href="https://yumdrop.netlify.app/">https://yumdrop.netlify.app/</a></p></li>
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
  )
}
