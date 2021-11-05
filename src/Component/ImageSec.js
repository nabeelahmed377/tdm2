import React from 'react'
import image from "../images/images.png"
import line from "../images/vertical-line.png"


function ImageSec() {
    return (
        <>
            <section className=" guarentee-section " style={{backgroundColor:"#fff"}}>
                <div className="container" >

                    <div className="row">

                    <div className="col-11 col-lg-6 col-xxl-6">
                            <img className="webdevelopment-image" src={image} />
                        </div>

                        <div className="col-11 col-lg-6 col-xxl-6">
                            <h2 className="sub-title-websec" ><span className="web-span" style={{ backgroundColor: "#FF8700" }}>GRAPHICS SOLUTIONS</span> FOR YOUR</h2>
                            <h2 className=" title-websec" style={{ color: "#FF8700" }}>Inspiring Graphics Work that you want for you</h2>
                            <p className="web-para" style={{ color: "black", }}>Our customized software development can work as influential equipment for your business. We appreciate your market needs and create appropriate applications for your company</p>
                            <div className="row">
                                <div className="col-1 col-lg-1 col-md-1">
                                    <img className="grant-line" src={line} />
                                </div>
                                <div className="col-11 col-lg-11 col-md-11">
                                    <ul className="gaurentee-list">
                                        <li>Branding and Communication</li>
                                        <li>Logo Design Service</li>
                                        <li>Web Development</li>
                                        <li>ECommerce Development</li>
                                        <li>Corporate Stalls</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default ImageSec
