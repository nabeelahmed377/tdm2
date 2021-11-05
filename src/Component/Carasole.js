import React from 'react'
import Slider from "react-slick";
import img from "../images/1.jpg";
// import img2 from "../images/2.jpg"
import Button from '@material-ui/core/Button';
import "./Carasole.css"


function Carasole() {

    const settings = {
        // dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        slidesPerView: 1,
        loop: true,
        effect: "fadeIn",
        autoplay: {
            delay: 5000,
            effect: "fadeIn"
        }
    };


    return (
        <>


            <div>
                {/* <h2> Single Item</h2> */}
                <Slider {...settings}>
                    <div>

                        <div className="slide1">
                            <h1 className=" container text">SMART WEB </h1>
                            <h1 className=" container text"> DESIGN AGENCY.</h1>
                            <Button className=" btn-main" color="danger" variant="contained" >READ MORE</Button>

                        </div>


                    </div>
                    <div>
                        <div className="slide2">
                            <h1 className=" container text">SMART WEB </h1>
                            <h1 className=" container text"> DESIGN AGENCY.</h1>
                            <Button className=" btn-main" color="danger" variant="contained" >READ MORE</Button>
                        </div>
                    </div>
                    <div>
                        <div className="slide3">
                            <h1 className=" container text">SMART WEB </h1>
                            <h1 className=" container text"> DESIGN AGENCY.</h1>
                            <Button className=" btn-main" color="danger" variant="contained" >READ MORE</Button>
                        </div>
                    </div>


                </Slider>
            </div>

        </>
    )
}

export default Carasole
