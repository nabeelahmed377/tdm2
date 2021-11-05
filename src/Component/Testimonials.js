import React from 'react'
import Slider from "react-slick";
import "./Testimonials.css";

function Testimonials() {


    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 5000,
            effect: "fadeIn"
        }
    };



    return (
        <>
            {/*  */}
            <section className="testi-slider">
                <div className="container">
                    <h2 className="sub-title-websec" style={{ fontFamily: 'Oswald ,sans-serif', textAlign: "center", fontSize: "18px", marginTop: "50px" }} >REVIEWS</h2>
                    < h2 className=" title-websec" style={{ color: "#ffc000", fontFamily: 'Oswald ,sans-serif', textAlign: "center", fontSize: "45px", marginBottom: "30px" }}><span style={{ fontFamily: 'Oswald ,sans-serif', fontWeight: "300" }}>  OUR CUSTOMERS</span> FEEDBACK WALL</h2>
                    <hr class="section-dash-yellow d-flex justify-content-center mx-auto" style={{ marginTop: "-20px" }}></hr>
                </div>
                {/*  */}





                <div className="main-testimonial">
                    <div class="demo">
                        <div class="container">
                            {/* <div class="row"> */}

                            {/* <div class="col-lg-12"> */}
                            <Slider {...settings}>
                                <div>

                                    <div id="testimonial-slider" class="owl-carousel"></div>
                                    <div class="testimonial">
                                        <div class="pic">
                                            <img src="https://picsum.photos/200" />
                                        </div>
                                        <h3 class="title">Williamson</h3>
                                        <span class="post">Web Developer</span>
                                        <p class="description">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium ad asperiores at atque culpa dolores eaque fugiat hic illo ipsam ipsum minima modi necessitatibus nemo officia, omnis perferendis placeat sit vitae, consectetur adipisicing elit ipsam.
                                        </p>
                                    </div>


                                </div>
                                <div>
                                    <div id="testimonial-slider" class="owl-carousel"></div>
                                    <div class="testimonial">
                                        <div class="pic">
                                            <img src="https://picsum.photos/200" />
                                        </div>
                                        <h3 class="title">Williamson</h3>
                                        <span class="post">Web Developer</span>
                                        <p class="description">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium ad asperiores at atque culpa dolores eaque fugiat hic illo ipsam ipsum minima modi necessitatibus nemo officia, omnis perferendis placeat sit vitae, consectetur adipisicing elit ipsam.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div id="testimonial-slider" class="owl-carousel"></div>
                                    <div class="testimonial">
                                        <div class="pic">
                                            <img src="https://picsum.photos/200" />
                                        </div>
                                        <h3 class="title">Williamson</h3>
                                        <span class="post">Web Developer</span>
                                        <p class="description">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium ad asperiores at atque culpa dolores eaque fugiat hic illo ipsam ipsum minima modi necessitatibus nemo officia, omnis perferendis placeat sit vitae, consectetur adipisicing elit ipsam.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div id="testimonial-slider" class="owl-carousel"></div>
                                    <div class="testimonial">
                                        <div class="pic">
                                            <img src="https://picsum.photos/200" />
                                        </div>
                                        <h3 class="title">Williamson</h3>
                                        <span class="post">Web Developer</span>
                                        <p class="description">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium ad asperiores at atque culpa dolores eaque fugiat hic illo ipsam ipsum minima modi necessitatibus nemo officia, omnis perferendis placeat sit vitae, consectetur adipisicing elit ipsam.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div id="testimonial-slider" class="owl-carousel"></div>
                                    <div class="testimonial">
                                        <div class="pic">
                                            <img src="https://picsum.photos/200" />
                                        </div>
                                        <h3 class="title">Williamson</h3>
                                        <span class="post">Web Developer</span>
                                        <p class="description">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium ad asperiores at atque culpa dolores eaque fugiat hic illo ipsam ipsum minima modi necessitatibus nemo officia, omnis perferendis placeat sit vitae, consectetur adipisicing elit ipsam.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div id="testimonial-slider" class="owl-carousel"></div>
                                    <div class="testimonial">
                                        <div class="pic">
                                            <img src="https://picsum.photos/200" />
                                        </div>
                                        <h3 class="title">Williamson</h3>
                                        <span class="post">Web Developer</span>
                                        <p class="description">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium ad asperiores at atque culpa dolores eaque fugiat hic illo ipsam ipsum minima modi necessitatibus nemo officia, omnis perferendis placeat sit vitae, consectetur adipisicing elit ipsam.
                                        </p>
                                    </div>
                                </div>
                            </Slider>
                        </div>



                    </div>






                    {/*  */}







                </div>
            </section>

        </>
    )
}

export default Testimonials
