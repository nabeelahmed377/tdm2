import React, { useEffect } from 'react'
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from './Component/Navbar'
import { Route, path } from "react-router-dom"
import Home from "./Component/Home"
import AboutUs from './Pages/AboutUs';
import Works from './Pages/Works';
import Contact from './Pages/Contact';
import Service from './Pages/Service';
import Order from './Pages/Order';






function App() {

  return (
    <>
      <Navbar />


      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/aboutus">
        <AboutUs />
      </Route>

      <Route exact path="/works">
        <Works />
      </Route>

      <Route exact path="/service">
        <Service />
      </Route>

      <Route exact path="/order">
        <Order />
      </Route>



      <Route exact path="/contact">
        <Contact />
      </Route>






    </>
  )
}

export default App
