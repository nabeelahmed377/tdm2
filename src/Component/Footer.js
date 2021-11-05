import React from 'react'
import "../Component/Footer.css"
import logo from "../images/logo.png"


function Footer() {
    return (
        <>
            <section id="footer">
                <div class="container">
                    <div class="row text-center text-xs-center text-sm-left text-md-left">
                        {/* <h1 className="footer-text">“Everything You Can Imagine Is Real”</h1> */}
                        <div class="col-xs-12 col-sm-3 col-md-3">
                            <img className="footer-logo" src={logo} />
                            <p className="footer-para">
                                Welcome to our web design agency. Lorem ipsum is simply free text dolor sit amet consectetur adipisicing elit. Tempore corrupti temporibus fuga earum asperiores, alias excepturi sit mpedit fugit laudantium.
                            </p>

                        </div>
                        <div class="col-xs-12 col-sm-3 col-md-3">
                            <h2 className="footer-heading">OUR SERVICES</h2>
                            <ul className="list-unstyled quick-links">

                                <li><i class="fa fa-check"></i>Web Devlopment</li>
                                <li><i class="fa fa-check"></i>UI/UX Designing</li>
                                <li><i class="fa fa-check"></i>Branding</li>
                                <li><i class="fa fa-check"></i>Graphics Designing</li>
                                <li><i class="fa fa-check"></i>Logo Designing</li>
                                <li><i class="fa fa-check"></i>CMS Development</li>
                            </ul>
                        </div>



                        <div class="col-xs-12 col-sm-3 col-md-3">
                            <h2 className="footer-heading">USEFUL LINKS</h2>
                            <ul className="list-unstyled quick-links">

                                <li><i class="fa fa-check"></i>Home</li>
                                <li><i class="fa fa-check"></i>About</li>
                                <li><i class="fa fa-check"></i>Services</li>
                                <li><i class="fa fa-check"></i>Portfolio</li>
                                <li><i class="fa fa-check"></i>Contact Us</li>
                            </ul>
                        </div>

                        <div class="col-xs-12 col-sm-3 col-md-3">
                            <h2 className="footer-heading">Contact Us</h2>
                            <ul className="list-unstyled quick-links">

                                <li>Block-5 Near Rub Medical, Gulshan-e-Iqbal, Allama Shabbir Ahmed Usmani Rd, Karachi - Pakistan</li>
                                <li>Timing : Mon-Sat, 10:00am until 06:00pm</li>
                                <li>Email : support@webexperts.pk</li>
                                <li>Phone : 0313 6363496</li>

                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                            {/* <ul class="list-unstyled list-inline social text-center">
                                <li class="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-facebook"></i></a></li>
                                <li class="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-twitter"></i></a></li>
                                <li class="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-instagram"></i></a></li>
                                <li class="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-google-plus"></i></a></li>
                                <li class="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02" target="_blank"><i class="fa fa-envelope"></i></a></li>
                            </ul> */}
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-sm-12 text-center">
                            <div className="copyright">
                                © copyright {new Date().getFullYear()} by{" "}
                                <a href="#">THEDESIGNSMARTS.COM</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer
