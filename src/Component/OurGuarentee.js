import React from 'react'
import image from "../Pages/images/about-img.png"
import line from "../images/vertical-line.png"

function OurGuarentee() {
    return (
        <>
            <section className=" guarentee-section">
                <div className="container" >

                    <div className="row">

                        <div className="col-11 col-lg-6 col-xxl-6">
                            <p className="sub-title-websec" ><span className="" style={{ fontSize: "16px", color: "#818391", fontFamily: 'Oswald,sansSerif' }}>WELCOME TO THE DESIGN MART</span> </p>
                            <h2 className=" title-websec" style={{ fontSize: "40px", fontWeight: "400", fontFamily: 'Oswald,sansSerif', color: "black",fontWeight:"bolder" }}><span style={{ color: "#ffc000", fontFamily: 'Oswald,sansSerif' }}>WE ARE THE BEST</span> WEBSITE AGENCY IN THE USA</h2>
                            <p className="web-para" style={{ fontSize: "16px", fontWeight: "400", fontFamily: 'Oswald,sansSerif', color: "#818391" }}>the Designs Mart is a leading website design company that offers you a range of web design and development services with a passion for building state-of-the-art websites for your business. Our top web designing team has a passion to enhance brand visibility through a custom website design as we believe website design is a very crucial part of building a strong brand presence. the Designs Mart, promise your website design to be full of creativity and has to offer top web design services include graphic designing, web development, digital marketing services, and web maintenance services. </p>
                            <button className="common_btn red_bg">READ MORE</button>
                            <div className="row">
                                {/* <div className="col-1 col-lg-1 col-md-1">
                                    <img className="grant-line" src={line} />
                                </div> */}
                                {/* <div className="col-11 col-lg-11 col-md-11">
                                    <ul className="gaurentee-list">
                                        <li>Work On Time</li>
                                        <li>Best Services </li>
                                        <li>100% Ammedments </li>
                                        <li>Error Less Development</li>
                                        <li>Best Designs</li>
                                    </ul>
                                </div> */}
                            </div>
                        </div>

                        <div className="col-11 col-lg-6 col-xxl-6">
                            <img className="webdevelopment-image" src={image} />
                        </div>

                    </div>



                </div>
            </section>

        </>
    )
}

export default OurGuarentee
