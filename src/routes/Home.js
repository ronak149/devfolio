import React from 'react';
import { Nav } from '../components/Navbar';

const Home = () => {
    return (
        <>
            <Nav />
            <div className="row m-0 p-0">
                <div className="col-md-6 p-5">
                    <img src={process.env.PUBLIC_URL + 'hero-img.svg'} className="img-fluid"/>
                </div>
                <div className="col-md-6">
                    <p>Ronak Patel</p>
                    <p>About Me</p>
                </div>
            </div>  
        </>
    );
}

export default Home;