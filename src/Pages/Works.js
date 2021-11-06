import React from 'react'
import img from "../Pages/images/about.jpg"
// import image2 from "../Pages/images/about-img-2.jpg"
// import image3 from "../Pages/images/about-img.png"
import "./AboutUs.css"
import "../index.css"
import Footer from '../Component/Footer'
import Portfolio from '../Component/Portfolio'


function Works() {
    return (
        <>
            <section>
                <div className="">
                    <img className="Breadcrum-img" src={img} />
                </div>

                <div className="container">
                    <h2 className=" title-websec" style={{ fontSize: "40px", fontWeight: "400", fontFamily: 'Oswald,sansSerif', color: "black", fontWeight: "bolder", textAlign: "center", marginTop: "50px" }}><span style={{ color: "#ffc000", fontFamily: 'Oswald,sansSerif' }}>WE ARE THE BEST</span><br /> WEBSITE AGENCY IN THE GLOBE</h2>
                    <hr class="section-dash-yellow d-flex justify-content-center mx-auto" style={{ width: "64px", marginTop: "5px" }}></hr>
                    <p className="web-para" style={{ fontSize: "16px", fontWeight: "400", fontFamily: 'Oswald,sansSerif', color: "#818391", textAlign: "center" }}>the Designs Mart is a leading website design company that offers you a range of web design and development services with a passion for building state-of-the-art websites for your business. Our top web designing team has a passion to enhance brand visibility through a custom website design as we believe website design is a very crucial part of building a strong brand presence. the Designs Mart, promise your website design to be full of creativity and has to offer top web design services include graphic designing, web development, digital marketing services, and web maintenance services. </p>
                </div>


                <Portfolio/>

                {/* <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <img className="about-img" src={image3} />
                        </div>
                        <div className="col-lg-6 col-md-6">

                            <h2 className=" title-websec" style={{ fontSize: "40px", fontWeight: "400", fontFamily: 'Oswald,sansSerif', color: "black", fontWeight: "200", marginTop: "50px" }}>OUR GOLDEN PRINCIPLES</h2>
                            <hr class="section-dash-yellow   " style={{ width: "64px", marginTop: "5px" }}></hr>
                            <p className="web-para" style={{ fontSize: "16px", fontWeight: "400", fontFamily: 'Oswald,sansSerif', color: "#818391", marginTop: "10px" }}>the Designs Mart is a leading website design company that offers you a range of web design and development services with a passion for building state-of-the-art websites for your business.
                                the Designs Mart is a leading website design company that offers you a range of web design and development services with a passion for building state-of-the-art websites for your
                            </p>
                        </div>
                    </div>
                </div> */}

{/* 
                <div className="container approch-container">
                    <div className="row">

                        <div className="col-lg-6 col-md-6">
                            <h2 className=" title-websec" style={{ fontSize: "40px", fontWeight: "400", fontFamily: 'Oswald,sansSerif', color: "black", fontWeight: "200", marginTop: "11px" }}><br />OUR APPROACH</h2>
                            <hr class="section-dash-yellow   " style={{ width: "64px", marginTop: "5px" }}></hr>
                            <p className="web-para" style={{ fontSize: "16px", fontWeight: "400", fontFamily: 'Oswald,sansSerif', color: "#818391", marginTop: "10px" }}>We are dedicated to cater the best services for our customers. We want to use our creative skills as we have realized that our customers expect something that is extraordinary from us. In this condition it is needed that we must have a clear approach in our mind to serve our customers; allowing them to achieve their goal providing the best quality services to them.
                            </p>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <img className="about-img" src={image2} />
                        </div>
                    </div>
                </div> */}
               
                <Footer />



            </section>
        </>
    )
}

export default Works
