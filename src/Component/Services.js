import React, { useState } from 'react'
import serviceapi from "../Apis/ServicesAPI"




function Services() { 
    const [service, setSevices] = useState(serviceapi)
    return (
        <>
            <section className="service-main-container">
                <div className="container service-container">

                    <h2 className="sub-title-websec" style={{ textAlign: "center", fontSize: "26px", fontFamily: 'Oswald,sans-serif', color: "#fff" }} >SERVICES WE ARE OFFERING</h2>
                    < h2 className=" title-websec" style={{ fontFamily: 'Oswald,sans-serif', textAlign: "center", fontSize: "45px", fontWeight: "600", color: "#ffc000" }}>WE DESIGN DIGITAL PRODUCTS THAT <br />HELP GROW BUSINESSES.</h2>


                    <div className="row">
                        {
                            service.map((curElem) => {
                                const { icon, title, image, backimg } = curElem
                                return <div className="col-lg-3 col-md-3 ">
                                    <div class="flip-card">
                                        <div class="flip-card-inner">
                                            <div class="flip-card-front">
                                                <div >{icon}</div>
                                                <h2 style={{ fontSize: "16px", fontWeight: "400", fontFamily: 'Oswald,sans-serif' }}>
                                                    {title}</h2>
                                            </div>

                                            <div class="flip-card-back">
                                                <div className="flip-backimg" >{backimg}</div>
                                                {/* <img  alt="Avatar">{backimg}</img> */}
                                                {/* <h2 className="back-card" style={{ fontSize: "16px", fontWeight: "400", fontFamily: 'Oswald,sans-serif' }} >{title}</h2> */}
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            })
                        }

                        {/* <div className="col-lg-3 col-md-3 ">
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img className="icon-class" src={grphicsicon} />
                                        <h2 style={{ fontSize: "16px", fontWeight: "400", fontFamily: 'Oswald,sansSerif' }}>
                                            WEBSITE DEVELOPMENT</h2>
                                    </div>

                                    <div class="flip-card-back">
                                        <img className="icon-class" src={grphicsicon} />
                                        <h2 className="back-card" style={{ fontSize: "16px", fontWeight: "400", fontFamily: 'Oswald,sansSerif' }}
                                        >WEBSITE DEVELOPMENT</h2>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 ">
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img className="icon-class" src={grphicsicon} />
                                        <h2 style={{ fontSize: "16px", fontWeight: "400", fontFamily: 'Oswald,sansSerif' }}>
                                            WEBSITE DEVELOPMENT</h2>
                                    </div>

                                    <div class="flip-card-back">
                                        <img className="icon-class" src={grphicsicon} />
                                        <h2 className="back-card" style={{ fontSize: "16px", fontWeight: "400", fontFamily: 'Oswald,sansSerif' }}
                                        >WEBSITE DEVELOPMENT</h2>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 ">
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img className="icon-class" src={grphicsicon} />
                                        <h2 style={{ fontSize: "16px", fontWeight: "400", fontFamily: 'Oswald,sansSerif' }}>
                                            WEBSITE DEVELOPMENT</h2>
                                    </div>

                                    <div class="flip-card-back">
                                        <img className="icon-class" src={grphicsicon} />
                                        <h2 className="back-card" style={{ fontSize: "16px", fontWeight: "400", fontFamily: 'Oswald,sansSerif' }}
                                        >WEBSITE DEVELOPMENT</h2>
                                    </div>
                                </div>

                            </div>
                        </div>




                    </div>


                    <div className="row">

                        <div className="col-lg-3 col-md-3 ">
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img className="icon-class" src={grphicsicon} />
                                        <h2 style={{ fontSize: "16px", fontWeight: "400", fontFamily: 'Oswald,sansSerif' }}>
                                            WEBSITE DEVELOPMENT</h2>
                                    </div>

                                    <div class="flip-card-back">
                                        <img className="icon-class" src={grphicsicon} />
                                        <h2 className="back-card" style={{ fontSize: "16px", fontWeight: "400", fontFamily: 'Oswald,sansSerif' }}
                                        >WEBSITE DEVELOPMENT</h2>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className="col-lg-3 col-md-3 ">
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img className="icon-class" src={grphicsicon} />
                                        <h2 style={{ fontSize: "16px", fontWeight: "400", fontFamily: 'Oswald,sansSerif' }}>
                                            WEBSITE DEVELOPMENT</h2>
                                    </div>

                                    <div class="flip-card-back">
                                        <img className="icon-class" src={grphicsicon} />
                                        <h2 className="back-card" style={{ fontSize: "16px", fontWeight: "400", fontFamily: 'Oswald,sansSerif' }}
                                        >WEBSITE DEVELOPMENT</h2>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className="col-lg-3 col-md-3 ">
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img className="icon-class" src={grphicsicon} />
                                        <h2 style={{ fontSize: "16px", fontWeight: "400", fontFamily: 'Oswald,sansSerif' }}>
                                            WEBSITE DEVELOPMENT</h2>
                                    </div>

                                    <div class="flip-card-back">
                                        <img className="icon-class" src={grphicsicon} />
                                        <h2 className="back-card" style={{ fontSize: "16px", fontWeight: "400", fontFamily: 'Oswald,sansSerif' }}
                                        >WEBSITE DEVELOPMENT</h2>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 ">
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img className="icon-class" src={grphicsicon} />
                                        <h2 style={{ fontSize: "16px", fontWeight: "400", fontFamily: 'Oswald,sansSerif' }}>
                                            WEBSITE DEVELOPMENT</h2>
                                    </div>

                                    <div class="flip-card-back">
                                        <img className="icon-class" src={grphicsicon} />
                                        <h2 className="back-card" style={{ fontSize: "16px", fontWeight: "400", fontFamily: 'Oswald,sansSerif' }}
                                        >WEBSITE DEVELOPMENT</h2>
                                    </div>
                                </div>

                            </div>
                        </div>
*/}
                    </div>


                    ``
                </div>
            </section>
        </>
    )
}

export default Services
