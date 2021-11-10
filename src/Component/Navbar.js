import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import logo from "../images/logo2.png"
import hamburger from "../images/hamburger.png"
// import { Person, Mail } from "@material-ui/icons";
import "./Navbar.css"


function Navbar() {
    // const [show, setShow] = useState(false)
    const [navbar, setShownav] = useState(false)
    const [show, setShow] = useState(false)
    const [showMediaIcons, setShowMediaIcons] = useState(false);

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



            <nav className={navbar ? "nav active " : "nav"}>
                <Link to="/" >
                    <img id="logo" src={logo} alt="" />
                </Link>
                <input className="menu-btn" id="menu-btn" type="checkboxF"></input>
                <label className="menu-icon" for="menu-btn" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                    <span className="nav-icon navbar-toggle "></span>
                </label>
                {/* <ul className="menu"  */}
                <ul className={showMediaIcons ? "list-items" : "menu"}>

                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/aboutus">About</Link></li>
                    <li><Link to="/service">Services</Link></li>
                    <li><Link to="/works">Works</Link></li>
                    <Link to="/contact"><button className="nav-btn">SHARE YOUR QUERY</button></Link>



                </ul>

            </nav>

        </>
    )
}

export default Navbar

