import React from 'react'
import Slider from "react-slick";
import react from "../images/1.jpg"
import node from "../images/slider/node.jpg"
import image4 from "../images/port-img/4.jpg";

function TechnoSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: {
            delay: 1000,
            effect: "fadeIn"
        },
        responsive: [
            {
                breakpoint: 1024,

                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <section className="techno-slider">
                <div className="container">
                    <h2 className="sub-title-websec" style={{ fontFamily: 'Oswald ,sans-serif', textAlign: "center", fontSize: "18px", marginTop: "0px" }} >OUR TECHNALOGIES</h2>
                    < h2 className=" title-websec" style={{ color: "#ffc000", fontFamily: 'Oswald ,sans-serif', textAlign: "center", fontSize: "45px", marginBottom: "30px" }}><span style={{ fontFamily: 'Oswald ,sans-serif', fontWeight: "300" }}> LATEST</span> TECHNALOGIES</h2>
                    <hr class="section-dash-yellow d-flex justify-content-center mx-auto" style={{ marginTop: "-20px" }}></hr>


                    <Slider {...settings}>
                        <div>
                            {/* <img className="techno-img" src={"../images/slider/react.jpg"} /> */}
                            <img className="techno-img" src="https://i.postimg.cc/pdMQjC5Q/brand-2.png" />

                            {/* <img className="techno-img">{react}</img> */}
                            {/* <img className="flip-backimg" src={react} /> */}
                        </div>
                        <div>
                            <img className="techno-img" src="https://i.postimg.cc/pdMQjC5Q/brand-2.png" />
                        </div>
                        <div>
                            <img className="techno-img" src="https://i.postimg.cc/B6qxYvgX/brand-3.png" />
                        </div>
                        <div>
                            <img className="techno-img" src="https://i.postimg.cc/d14GzKHn/brand-4.png" />
                        </div>
                        <div>
                            <img className="techno-img" src="https://i.postimg.cc/x8ZM13Sz/brand-5.png" />
                        </div>
                        <div>
                            <img className="techno-img" src="https://i.postimg.cc/B6qxYvgX/brand-3.png" />
                        </div>
                        <div>
                            <img className="techno-img" src="https://i.postimg.cc/B6qxYvgX/brand-3.png" />
                        </div>
                        <div>
                            <img className="techno-img" src="https://i.postimg.cc/B6qxYvgX/brand-3.png" />
                        </div>
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default TechnoSlider
