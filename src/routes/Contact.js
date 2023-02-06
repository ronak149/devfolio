import React from "react";
import { Nav } from "../components/Navbar";

const Contact = (props) => {
  const { darkTheme, setDarkTheme } = props;
  const activeTheme = darkTheme
    ? { backgroundColor: "#1a1a1a", color: "#fff" }
    : { backgroundColor: "white", color: "#1a1a1a" };

  return (
    <>
      <Nav darkTheme={darkTheme} setDarkTheme={setDarkTheme} />

<section class="mb-4 m-1 p-1" style={activeTheme}>
    <br/><br/>
    <h2 class="h1-responsive font-weight-bold text-center my-4">Get in touch with me</h2> <br/>
    <h5 class="text-center w-responsive mx-auto mb-5"> Have an interesting project in mind to work with me ? OR would you like to know more about me ? Get in touch with me!</h5>

    <div class="row p-md-5 p-2 m-md-5 m-2 ">


        <div class="col-md-9 mb-md-0 mb-5">
            <form action="mailto:ronak.canada@outlook.com" id="contact-form" name="contact-form" method="post" enctype="text/plain">

        
                <div class="row">

            
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <h6 class="mb-0 pb-1" for="name" >Your name</h6>
                            <input type="text" id="name" name="name" class="form-control" /> <br/>
                            
                        </div>
                    </div>
            

            
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                        <h6 class="mb-0 pb-1" for="email" >Your email</h6>
                            <input type="text" id="email" name="email" class="form-control" /> <br/>
                            
                        </div>
                    </div>
            

                </div>
        

        
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                        <h6 class="mb-0 pb-1" for="subject" >Subject</h6>
                            <input type="text" id="subject" name="subject" class="form-control" /> <br/>
                            
                        </div>
                    </div>
                </div>
        

        
                <div class="row">

            
                    <div class="col-md-12">

                        <div class="md-form">
                        <h6 class="mb-0 pb-1" for="message">Your message</h6>
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                            
                        </div>

                    </div>
                </div>
                <div class="text-center text-md-left">
                <br/><br/>
                    <input className="btn-outline text-decoration-none fw-semibold" type="submit" name="submit" value="Submit" />
                </div>
            <div class="status"></div>

            </form>
            
        </div>



        <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
                <li><i class="fs-4 bi bi-geo-alt-fill"></i>
                    <h5>Toronto, ON</h5><br/>
                </li>

                <li><i class="fs-4 bi bi-telephone-fill"></i>
                    <h5>+1 705 772 0766</h5><br/>
                </li>

                <li><i class="fs-4 bi bi-envelope-fill"></i>
                    <h5>ronak.canada@outlook.com</h5>
                </li>
            </ul>
        </div>

    </div>

</section>
    </>
  );
};

export default Contact;
