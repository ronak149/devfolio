import React from 'react';
import { BubblyLink } from 'react-bubbly-transitions';
import { Link } from 'react-router-dom';
import Flip from 'react-reveal/Flip';
import Tada from 'react-reveal/Tada';
import Roll from 'react-reveal/Roll';
import { Nav } from '../components/Navbar';

const Skills = (props) => {
    const { darkTheme, setDarkTheme } = props;
    const activeTheme = darkTheme ? { backgroundColor: "#1a1a1a", color: "white" } : { backgroundColor: "white", color: "#1a1a1a" };
    return (
        <>
            <Nav darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
            <div className="row m-0 p-0 h-100" style={activeTheme}>
                <div className="col-md-11 order-md-1 order-2">
                    <h2 className='fw-semibold text-center fs-4'> My choice of weapons &nbsp; <Tada duration={2000} forever={true}><span className='d-inline-block'><i class="devicon-codeigniter-plain text-warning text-shadow fs-1"></i></span></Tada></h2>
                    <br/>
                    <div className="row g-3 m-0 p-0 align-items-baseline">
                        <Flip top duration={2000}><div className='col-md-3 m-0 text-center'><h3 className='fs-5 p-0 lh-1'><br /> UX/UI Design : </h3></div></Flip>
                        <div className='col m-0'>
                            <div className='row d-flex flex-row'>
                                <Flip left duration={2000}><div className='card mb-2 bg-gradient shadow p-2 px-4 mx-3 w-auto border-secondary border-opacity-50' style={activeTheme}>
                                    <p className='text-center pb-1 m-0 p-0'><i class="devicon-figma-plain" style={{ fontSize: '3.5rem' }}></i></p>
                                    <div className='card-body p-0 m-0'>
                                        <p className='card-title p-0 m-0 f-5 fw-semibold text-center'>FIGMA</p>
                                    </div>
                                </div></Flip>
                                <Flip left duration={2000} delay={500}><div className='card mb-2 bg-gradient shadow p-2 px-4 mx-3 w-auto border-secondary border-opacity-50' style={activeTheme}>
                                    <p className='text-center pb-1 m-0 p-0'><i class=" devicon-xd-plain" style={{ fontSize: '3.5rem' }}></i></p>
                                    <div className='card-body p-0 m-0'>
                                        <p className='card-title p-0 m-0 f-5 fw-semibold text-center'>XD</p>
                                    </div>
                                </div></Flip>
                                <Flip left duration={2000} delay={1000}><div className='card mb-2 bg-gradient shadow p-2 px-4 mx-3 w-auto border-secondary border-opacity-50' style={activeTheme}>
                                    <p className='text-center pb-1 m-0 p-0'><i class=" devicon-webflow-original" style={{ fontSize: '3.5rem' }}></i></p>
                                    <div className='card-body p-0 m-0'>
                                        <p className='card-title p-0 m-0 f-5 fw-semibold text-center'>WFLOW</p>
                                    </div>
                                </div></Flip>
                            </div>
                            <hr />
                        </div>
                    </div>
                    <div className="row g-3 m-0 p-0 align-items-baseline">
                        <Flip top duration={2000}><div className='col-md-3 m-0 text-center'><h3 className='fs-5 p-0 lh-1'><br /> FRONTEND : </h3></div></Flip>
                        <div className='col m-0'>
                            <div className='row d-flex flex-row'>
                                <Flip left duration={2000}><div className='card mb-2 bg-gradient shadow p-2 px-4 mx-3 w-auto border-secondary border-opacity-50' style={activeTheme}>
                                    <p className='text-center pb-1 m-0 p-0'><i class=" devicon-html5-plain" style={{ fontSize: '3.5rem' }}></i></p>
                                    <div className='card-body p-0 m-0'>
                                        <p className='card-title p-0 m-0 f-5 fw-semibold text-center'>HTML</p>
                                    </div>
                                </div></Flip>
                                <Flip left duration={2000} delay={500}><div className='card mb-2 bg-gradient shadow p-2 px-4 mx-3 w-auto border-secondary border-opacity-50' style={activeTheme}>
                                    <p className='text-center pb-1 m-0 p-0'><i class=" devicon-css3-plain" style={{ fontSize: '3.5rem' }}></i></p>
                                    <div className='card-body p-0 m-0'>
                                        <p className='card-title p-0 m-0 f-5 fw-semibold text-center'>CSS</p>
                                    </div>
                                </div></Flip>
                                <Flip left duration={2000} delay={1000}><div className='card mb-2 bg-gradient shadow p-2 px-4 mx-3 w-auto border-secondary border-opacity-50' style={activeTheme}>
                                    <p className='text-center pb-1 m-0 p-0'><i class=" devicon-bootstrap-plain" style={{ fontSize: '3.5rem' }}></i></p>
                                    <div className='card-body p-0 m-0'>
                                        <p className='card-title p-0 m-0 f-5 fw-semibold text-center'>BS</p>
                                    </div>
                                </div></Flip>
                                <Flip left duration={2000} delay={1500}><div className='card mb-2 bg-gradient shadow p-2 px-4 mx-3 w-auto border-secondary border-opacity-50' style={activeTheme}>
                                    <p className='text-center pb-1 m-0 p-0'><i class=" devicon-javascript-plain" style={{ fontSize: '3.5rem' }}></i></p>
                                    <div className='card-body p-0 m-0'>
                                        <p className='card-title p-0 m-0 f-5 fw-semibold text-center'>JS</p>
                                    </div>
                                </div></Flip>
                                <Flip left duration={2000} delay={2000}><div className='card mb-2 bg-gradient shadow p-2 px-4 mx-3 w-auto border-secondary border-opacity-50' style={activeTheme}>
                                    <p className='text-center pb-1 m-0 p-0'><i class=" devicon-react-original" style={{ fontSize: '3.5rem' }}></i></p>
                                    <div className='card-body p-0 m-0'>
                                        <p className='card-title p-0 m-0 f-5 fw-semibold text-center'>REACT</p>
                                    </div>
                                </div></Flip>
                                <Flip left duration={2000} delay={2500}><div className='card mb-2 bg-gradient shadow p-2 px-4 mx-3 w-auto border-secondary border-opacity-50' style={activeTheme}>
                                    <p className='text-center pb-1 m-0 p-0'><i class=" devicon-redux-original" style={{ fontSize: '3.5rem' }}></i></p>
                                    <div className='card-body p-0 m-0'>
                                        <p className='card-title p-0 m-0 f-5 fw-semibold text-center'>REACT</p>
                                    </div>
                                </div></Flip>
                            </div>
                            <hr />
                        </div>
                    </div>
                    <div className="row g-3 m-0 p-0 align-items-baseline">
                        <Flip top duration={2000}><div className='col-md-3 m-0 text-center'><h3 className='fs-5 p-0 lh-1'><br /> BACKEND : </h3></div></Flip>
                        <div className='col m-0'>
                            <div className='row d-flex flex-row'>
                                <Flip left duration={2000}><div className='card mb-2 bg-gradient shadow p-2 px-4 mx-3 w-auto border-secondary border-opacity-50' style={activeTheme}>
                                    <p className='text-center pb-1 m-0 p-0'><i class=" devicon-nodejs-plain" style={{ fontSize: '3.5rem' }}></i></p>
                                    <div className='card-body p-0 m-0'>
                                        <p className='card-title p-0 m-0 f-5 fw-semibold text-center'>Node</p>
                                    </div>
                                </div></Flip>
                                <Flip left duration={2000} delay={500}><div className='card mb-2 bg-gradient shadow p-2 px-4 mx-3 w-auto border-secondary border-opacity-50' style={activeTheme}>
                                    <p className='text-center pb-1 m-0 p-0'><i class=" devicon-express-original" style={{ fontSize: '3.5rem' }}></i></p>
                                    <div className='card-body p-0 m-0'>
                                        <p className='card-title p-0 m-0 f-5 fw-semibold text-center'>Express</p>
                                    </div>
                                </div></Flip>
                            </div>
                            <hr/>
                        </div>
                    </div>
                    <div className="row g-3 m-0 p-0 align-items-baseline">
                        <Flip top duration={2000}><div className='col-md-3 m-0 text-center'><h3 className='fs-5 p-0 lh-1'><br /> DATABASE : </h3></div></Flip>
                        <div className='col m-0'>
                            <div className='row d-flex flex-row'>
                                <Flip left duration={2000} ><div className='card mb-2 bg-gradient shadow p-2 px-4 mx-3 w-auto border-secondary border-opacity-50' style={activeTheme}>
                                    <p className='text-center pb-1 m-0 p-0'><i class=" devicon-mongodb-plain" style={{ fontSize: '3.5rem' }}></i></p>
                                    <div className='card-body p-0 m-0'>
                                        <p className='card-title p-0 m-0 f-5 fw-semibold text-center'>Mongo</p>
                                    </div>
                                </div></Flip>
                                <Flip left duration={2000} delay={500}><div className='card mb-2 bg-gradient shadow p-2 px-4 mx-3 w-auto border-secondary border-opacity-50' style={activeTheme}>
                                    <p className='text-center pb-1 m-0 p-0'><i class=" devicon-mysql-plain" style={{ fontSize: '3.5rem' }}></i></p>
                                    <div className='card-body p-0 m-0'>
                                        <p className='card-title p-0 m-0 f-5 fw-semibold text-center'>SQL</p>
                                    </div>
                                </div></Flip>
                            </div>
                            <hr/>
                        </div>
                    </div>
                </div>
                <div className="col-md-1 pt-4 m-0 order-md-3 order-3">
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
                <div className="row m-0 p-0 order-4 order-md-4">
                        <div className="col-6 m-0 text-end"><span className="btn-outline text-decoration-none fw-semibold"><BubblyLink to="/projects"> <i class="bi bi-arrow-left fs-5"></i> My Projects </BubblyLink></span></div>
                        <div className="col-6 m-0 text-start"><span className="btn-outline text-decoration-none fw-semibold"> <BubblyLink to="/contact">Contact <i class="bi bi-arrow-right fs-5"></i> </BubblyLink></span></div>
                    </div>
            </div>
        </>
    );
}

export default Skills;