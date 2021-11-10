import React from 'react'
import Header from "../Component/Header"
import Carasole from './Carasole'
import Contact from '../Pages/Contact'
import Footer from './Footer'
import ImageSec from './ImageSec'
import Navbar from './Navbar'
import OurGuarentee from './OurGuarentee'
import Portfolio from './Portfolio'
import PriceChart from './PriceChart'
import Services from './Services'
import Services2 from './Services2'
import Subscribe from './Subscribe'
import TechnoSlider from './TechnoSlider'
import Testimonials from './Testimonials'
import WebDevelopment from './WebDevelopment'

function Home() {
    return (
        <>
            
            {/* <Carasole /> */}
            <Header />
            <OurGuarentee />
            <Services />
            {/* <Services2 /> */}
            {/* <WebDevelopment /> */}
            {/* <ImageSec /> */}
            {/* <PriceChart /> */}
            <Portfolio />
            <Testimonials/>
            <TechnoSlider />
            <Subscribe />
            {/* <Contact /> */}
            <Footer />
        </>
    )
}

export default Home
