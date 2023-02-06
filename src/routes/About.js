import React from 'react';
import { BubblyLink } from 'react-bubbly-transitions';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';
import Tada from 'react-reveal/Tada';
import { Nav } from '../components/Navbar';

const About = (props) => {
    const { darkTheme, setDarkTheme } = props;
    const activeTheme = darkTheme ? { backgroundColor: "#1a1a1a", color: "white" } : { backgroundColor: "white", color: "#1a1a1a" };
    return (
        <>
            <Nav darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
            <div className='row m-0 p-0 h-100' style={activeTheme}>
                <Fade left duration={2000}><div className='col-md-6 order-md-1 order-2'>
                    <div className='row align-items-center h-100'>
                        <div className='col p-md-5 p-2'>
                            <h2 className='fs-3 fw-semibold text-center pb-2'><br />Hi there <Tada duration={2000} forever={true}><span className='d-inline-block fs-2'>🖐️</span></Tada>,</h2>
                            <p className='fs-5' style={{fontWeight: 400, fontFamily: 'Source Code Pro', lineHeight: '2.2rem'}}>I am Ronak. A performance
                                focused <b>Full Stack Developer</b> experienced in building Web Apps with 
                                <b>JavaScript, ReactJS, NodeJS, ExpressJS</b> and come other cool libraries and frameworks. I am a passionate developer
                                 who wants to learn and develop continuously.</p>
                            <p className='text-center py-3'><button className='btn-outline'><BubblyLink to="/projects">Checkout my work &nbsp;{' '}<i class="bi bi-clipboard-data-fill fs-4"></i></BubblyLink></button></p>                            
                        </div>
                    </div>
                </div>
                </Fade>
                <Fade right duration={2000}>
                <div className='col-md-5 order-md-2 order-1'>
                    <div className='row align-items-center justify-content-center h-100'>
                        <div className='col text-center p-md-4'>
                            <img src="./profile.PNG" alt="profile avatar" className='img-fluid w-75'/>
                            <h2 className='fs-2 fw-semibold'> <br /> RONAK PATEL </h2>
                            <p className='fs-4 fw-semibold mb-0'>a</p>
                            <p className='fs-1' style={{fontWeight: 200}}>
                            <Typewriter 
                                options = {{
                                    autoStart: true,
                                    loop: true,
                                }}
                                onInit = {(typewriter) => {
                                    typewriter.pauseFor(1000)
                                        .typeString('FULL STACK DEVELOPER')
                                        .pauseFor(2500)
                                        .deleteAll()
                                        .typeString('FRONTEND DEVELOPER')
                                        .pauseFor(2500)
                                        .deleteAll()
                                        .typeString('BACKEND DEVELOPER')
                                        .pauseFor(2500)
                                        .deleteAll()
                                        .start();
                                }} 
                            />
                            </p>
                        </div>
                    </div>
                </div>
                </Fade>
                <div className='col-md-1 pt-4 order-md-3 order-3'>
                    <div className='row align-items-center justify-content-center h-100'>
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
}

export default About;