import React from 'react'
import image from "../images/web-design.png"
import line from "../images/vertical-line-2.png"

function WebDevelopment() {
    return (
        <>
            <section className=" development-section">
                <div className="container" >

                    <div className="row">
                        <div className="col-11 col-lg-6 col-xxl-6">
                            <img className="webdevelopment-image" src={image} />
                        </div>

                        <div className="col-11 col-lg-6 col-xxl-6">
                            <h2 className="sub-title-websec"><span className="web-span">SHOWCASING</span> WHAT YOU GOT</h2>
                            <h2 className=" title-websec">A Web Design Agency That Makes Change Happen.</h2>
                            <p className="web-para">Once we have designed your website, it’s time to proceed towards the development process. Looks are necessary, but if your website is not getting the traffic, then it means you need to head towards the direction that would be pushing the traffic towards your website. We can allow you to get the maximum traffic at your website as we have the best website developers in our team who make it sure that our customers are pleased to see the final look of their website. Our web development team is fully trained having the knowledge related to the latest technologies.</p>
                            <div className="row">
                                <div className="col-1 col-lg-1 col-md-1">
                                    <img className="web-line" src={line} />
                                </div>
                                <div className="col-11 col-lg-11 col-md-11">
                                    <p className="web-para">  anything less? With a team of expert site builders, writing gurus, and visionary designers, we help prospective brands in streaming through a frictionless environment. Technology has the power to do good, and so does your brand!</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>




        </>
    )
}

export default WebDevelopment
