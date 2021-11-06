import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import logo from "../images/logo2.png"
import hamburger from "../images/hamburger.png"
// import { Person, Mail } from "@material-ui/icons";
import "./Navbar.css"


function Navbar() {
    // const [show, setShow] = useState(false)
    const [navbar, setShownav] = useState(false)

    const changeBg = () => {
        if (window.scrollY >= 50) {
            setShownav(true)

        } else {
            setShownav(false)
        }
    }


    window.addEventListener("scroll", changeBg)

    return (
        <>

            {/* <section className=" navbar-bg ">
                <nav className={navbar ? "navbar active navbar-expand-lg" : "navbar navbar-expand-lg"}>
                    <div class="container">
                        <img className="logo-img" src={logo} alt="" />
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setShow(!show)}>
                            <img className="navbar-toggler" src={hamburger} alt="" />
                        </button>

                        <div class={`collapse navbar-collapse ${show ? "show" : ""}`}>
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li class="nav-item ">
                                    <NavLink class="nav-link" className="Home-css" style={{ textTransform: "uppercase", }} to="/">Home </NavLink>
                                </li>
                                <li class="nav-item ">
                                    <NavLink class="nav-link" to="/aboutus">About Us</NavLink>
                                </li>

                                <li class="nav-item ">
                                    <div class="dropdown-content">
                                        <NavLink class="nav-link" to="/HowItWorks">Service</NavLink>

                                    </div>

                                </li>

                                <li class="nav-item">
                                    <NavLink class="nav-link" to="/Guarentee">Guarentee</NavLink>
                                </li>

                                <li class="nav-item">
                                    <NavLink class="nav-link" to="/OrderForm">Order Form</NavLink>
                                </li>


                            </ul>

                        </div>
                    </div>
                </nav>
            </section> */}

            <nav className={navbar ? "nav active " : "nav"}>
                <Link to="/" >
                    <img id="logo" src={logo} alt="" />
                </Link>
                <input className="menu-btn" id="menu-btn" type="checkboxF"></input>
                <label className="menu-icon" for="menu-btn">
                    <span className="nav-icon navbar-toggle "></span>
                </label>
                <ul className="menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/aboutus">About</Link></li>
                    <li><Link to="/works">Works</Link></li>
                    <li><Link to="Contact">Contact</Link></li>

                </ul>

            </nav>

        </>
    )
}

export default Navbar

