import React, { useState } from 'react'
import "./Portfolio.css"
import Button from '@material-ui/core/Button';
import image1 from "../images/port-img/1.jpg";
import image2 from "../images/port-img/2.jpg";
import image3 from "../images/port-img/3.jpg";
import image4 from "../images/port-img/4.jpg";
import image5 from "../images/port-img/5.jpg";
import image6 from "../images/port-img/6.jpg";

// import api from "./PortfolioApi.js
import portfolioapi from '../Apis/PortfolioAPI'

function Portfolio() {


    const [getdata, setgetdata] = useState(portfolioapi)

    const filterItem = (categoryItem) => {
        const updatedItem = portfolioapi.filter((curElem) => {
            return curElem.category === categoryItem
        })
        setgetdata(updatedItem)
    }



    return (
        <>

            <div class=" container-fluid  projects-container scrollimation in ">
                <h2 className="sub-title-websec" style={{ fontFamily: 'Oswald ,sans-serif', textAlign: "center", fontSize: "18px", marginTop: "50px" }} >OUR PORTFOLIO</h2>
                < h2 className=" title-websec" style={{ color: "#ffc000", fontFamily: 'Oswald ,sans-serif', textAlign: "center", fontSize: "45px", marginBottom: "30px" }}><span style={{ fontFamily: 'Oswald ,sans-serif', fontWeight: "300" }}> LATEST</span> WORKS</h2>
                <hr class="section-dash-yellow d-flex justify-content-center mx-auto" style={{ marginTop: "-20px" }}></hr>


                <div className=" container btn-container text-center pb-5 ">
                    <Button variant="contained" style={{ color: "white", backgroundColor: "#febd0e" }} onClick={() => filterItem("webdesigning")} >webdesigning</Button>
                    <Button variant="contained" style={{ color: "white", backgroundColor: "#febd0e" }} onClick={() => filterItem("Branding")}>Branding</Button>
                    <Button variant="contained" style={{ color: "white", backgroundColor: "#febd0e" }} onClick={() => filterItem("graphicsDesigning")}>graphicsDesigning</Button>
                    <Button variant="contained" style={{ color: "white", backgroundColor: "#febd0e" }} onClick={() => filterItem("ui/uxDesigning")}>ui/uxDesigning</Button>
                    <Button variant="contained" style={{ color: "white", backgroundColor: "#febd0e" }} onClick={() => filterItem("logoDesigning")}>logoDesigning</Button>
                    <Button variant="contained" style={{ color: "white", backgroundColor: "#febd0e" }} onClick={() => filterItem("CMSDevelopment")}>CMSDevelopment</Button>

                </div>




                <div class="row">
                    {
                        getdata.map((curElem) => {
                            return <article class="col-md-4 col-sm-6 portfolio-item web-design apps psd">
                                <div class="portfolio-thumb in">
                                    <a href="#" class="main-link">
                                        <div>{curElem.image}</div>
                                        {/* <img class="img-responsive img-center" src={curElem.image1} alt="" /> */}
                                        <h2 class="project-title">{curElem.title}</h2>
                                        <span class="overlay-mask"></span>
                                    </a>

                                </div>
                            </article>
                        })
                    }



                    {/* <article class="col-md-4 col-sm-6 portfolio-item web-design apps psd">
                        <div class="portfolio-thumb in">
                            <a href="#" class="main-link">
                                <div className="">{getdata.image}</div>
                                <img class="img-responsive img-center" src={getdata.image1} alt="" />
                                <h2 class="project-title">{getdata.title}</h2>
                                <span class="overlay-mask"></span>
                            </a>
                            <a class="enlarge cboxElement" href="#" title="Bills Project"><i class="fa fa-expand fa-fw"></i></a>
                            <a class="link" href="#"><i class="fa fa-eye fa-fw"></i></a>
                        </div>
                    </article>

                    <article class="col-md-4 col-sm-6 portfolio-item apps">
                        <div class="portfolio-thumb in">
                            <a href="#" class="main-link">
                                <img class="img-responsive img-center" src={image2} alt="" />
                                <h2 class="project-title">Logo Designing</h2>
                                <span class="overlay-mask"></span>
                            </a>
                            <a class="enlarge cboxElement" href="#" title="Bills Project"><i class="fa fa-expand fa-fw"></i></a>
                            <a class="link" href="#"><i class="fa fa-eye fa-fw"></i></a>
                        </div>
                    </article>

                    <article class="col-md-4 col-sm-6 portfolio-item web-design psd">
                        <div class="portfolio-thumb in">
                            <a href="#" class="main-link">
                                <img class="img-responsive img-center" src={image3} alt="" />
                                <h2 class="project-title">Graphics Designing</h2>
                                <span class="overlay-mask"></span>
                            </a>
                            <a class="enlarge cboxElement" href="#" title="Bills Project"><i class="fa fa-expand fa-fw"></i></a>
                            <a class="link" href="#"><i class="fa fa-eye fa-fw"></i></a>
                        </div>
                    </article>

                    <article class="col-md-4 col-sm-6 portfolio-item apps">
                        <div class="portfolio-thumb in">
                            <a href="#" class="main-link">
                                <img class="img-responsive img-center" src={image4} alt="" />
                                <h2 class="project-title">Mobile Application</h2>
                                <span class="overlay-mask"></span>
                            </a>
                            <a class="enlarge cboxElement" href="#" title="Bills Project"><i class="fa fa-expand fa-fw"></i></a>
                            <a class="link" href="#"><i class="fa fa-eye fa-fw"></i></a>
                        </div>
                    </article>

                    <article class="col-md-4 col-sm-6 portfolio-item web-design psd">
                        <div class="portfolio-thumb in">
                            <a href="#" class="main-link">
                                <img class="img-responsive img-center" src={image5} alt="" />
                                <h2 class="project-title">2D/3D Animation</h2>
                                <span class="overlay-mask"></span>
                            </a>
                            <a class="enlarge cboxElement" href="#" title="Scavenger Hunt"><i class="fa fa-expand fa-fw"></i></a>
                            <a class="link" href="#"><i class="fa fa-eye fa-fw"></i></a>
                        </div>
                    </article>

                    <article class="col-md-4 col-sm-6 portfolio-item web-design apps">
                        <div class="portfolio-thumb in">
                            <a href="#" class="main-link">
                                <img class="img-responsive img-center" src={image6} alt="" />
                                <h2 class="project-title">Video Editing</h2>
                                <span class="overlay-mask"></span>
                            </a>
                            <a class="enlarge cboxElement" href="#" title="Sonor"><i class="fa fa-expand fa-fw"></i></a>
                            <a class="link" href="#"><i class="fa fa-eye fa-fw"></i></a>
                        </div>
                    </article> */}
                </div>
            </div>


        </>
    )
}

export default Portfolio
