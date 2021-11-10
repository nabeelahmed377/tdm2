import React from 'react'
import Footer from '../Component/Footer'
import Services from '../Component/Services'
import Subscribe from '../Component/Subscribe'
import TechnoSlider from '../Component/TechnoSlider'
import img from "../Pages/images/about.jpg"

function Service() {
    return (
        <>
            <div className="">
                <img className="Breadcrum-img" src={img} style={{ paddingBottom: "20px" }} />
            </div>

            <Services />
            <TechnoSlider/>
            <Subscribe/>
            <Footer />
        </>
    )
}

export default Service
