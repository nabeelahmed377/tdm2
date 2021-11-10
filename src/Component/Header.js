import React from 'react'
// import video from "../images/header.mp4"
import hero from "../images/hero1.jpg"

function Header() {
    return (
        <>
            <header>


                <div className="hero-img">
                    <img src={hero} />
                </div>
                {/* <div id="main" className="" > */}
                    {/* <div className="row">
                        <div className="col-11 col-lg-4 header-left-side d-flex justify-content-center flex-column align-items-start ">
                            <div className="name">

                            </div>
                        </div> */}
                      

                        {/* <div className="col-12 col-lg-8 header-left-side d-flex justify-content-center flex-column align-items-start ">
                            <div className="details">
                                <h3 className="heading">We're Creative Design Agency</h3>
                                <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                                    luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            </div>
                        </div> */}
                    {/* </div> 
                     <video autoPlay loop muted>
                        <source className="header-video" src={video} style={{width:"100%"}} type='video/mp4' />
                    </video> */}
                {/* </div> */}
            </header>
        </>
    )
}

export default Header
