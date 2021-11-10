import React from 'react'
import "./Step.css"

function Steps() {
    return (
        <>

            <div className="container ">

                <h2 className=" title-websec" style={{ fontSize: "40px", fontWeight: "400", fontFamily: 'Oswald,sansSerif', color: "black", fontWeight: "200", marginTop: "50px",textAlign:"center" }}>OUR GOLDEN PRINCIPLES</h2>
                <hr class="section-dash-yellow mx-auto   " style={{ width: "64px", marginTop: "5px" }}></hr>
                


                <div class="row">
                    <div class="col-md-5  mb-4 ">
                        <div class="process-box process-left" data-aos="fade-right" data-aos-duration="1000">
                            <div class="row">
                                <div class="col-md-5">
                                    <div class="process-step">
                                        <p class="m-0 p-0">Step</p>
                                        <h2 class="m-0 p-0">01</h2>
                                    </div>
                                </div>
                                <div class="col-md-7">
                                    <h5>What is Lorem Ipsum?</h5>
                                    <p><small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </small></p>
                                </div>
                            </div>
                            <div class="process-line-l"></div>
                        </div>
                    </div>
                    <div class="col-md-2"></div>
                    <div class="col-md-5">
                        <div class="process-point-right"></div>
                    </div>
                </div>
                {/* <!-- ============ step 2 =========== --> */}
                <div class="row">

                    <div class="col-md-5">
                        <div class="process-point-left"></div>
                    </div>
                    <div class="col-md-2"></div>
                    <div class="col-md-5">
                        <div class="process-box process-right" data-aos="fade-left" data-aos-duration="1000">
                            <div class="row">
                                <div class="col-md-5">
                                    <div class="process-step">
                                        <p class="m-0 p-0">Step</p>
                                        <h2 class="m-0 p-0">02</h2>
                                    </div>
                                </div>
                                <div class="col-md-7">
                                    <h5>What is Lorem Ipsum?</h5>
                                    <p><small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </small></p>
                                </div>
                            </div>
                            <div class="process-line-r"></div>
                        </div>
                    </div>

                </div>
                {/* <!-- ============ step 3 =========== --> */}
                <div class="row">
                    <div class="col-md-5">
                        <div class="process-box process-left" data-aos="fade-right" data-aos-duration="1000">
                            <div class="row">
                                <div class="col-md-5">
                                    <div class="process-step">
                                        <p class="m-0 p-0">Step</p>
                                        <h2 class="m-0 p-0">03</h2>
                                    </div>
                                </div>
                                <div class="col-md-7">
                                    <h5>What is Lorem Ipsum?</h5>
                                    <p><small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </small></p>
                                </div>
                            </div>
                            <div class="process-line-l"></div>
                        </div>
                    </div>
                    <div class="col-md-2"></div>
                    <div class="col-md-5">
                        <div class="process-point-right"></div>
                    </div>
                </div>
                {/* <!-- ============ step 4 =========== --> */}
                <div class="row">
                    <div class="col-md-5">
                        <div class="process-point-left"></div>
                    </div>
                    <div class="col-md-2"></div>
                    <div class="col-md-5">
                        <div class="process-box process-right" data-aos="fade-left" data-aos-duration="1000">
                            <div class="row">
                                <div class="col-md-5">
                                    <div class="process-step">
                                        <p class="m-0 p-0">Step</p>
                                        <h2 class="m-0 p-0">04</h2>
                                    </div>
                                </div>
                                <div class="col-md-7">
                                    <h5>What is Lorem Ipsum?</h5>
                                    <p><small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </small></p>
                                </div>
                            </div>
                            <div class="process-line-r"></div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Steps
