import React, { useState } from 'react'
import "../Component/PriceChart.css"
import api from '../Apis/PriceAPI'
import Button from '@material-ui/core/Button';


function PriceChart() {
    const [priceapi, setpriceapi] = useState(api)

    const filterItem = (categoryItem) => {
        const updatedItem = api.filter((curElem) => {
            return curElem.category === categoryItem
        })
        setpriceapi(updatedItem)
    }

    return (
        <>
            <div class="demo9">
                <div class="container">
                    <div>
                        <h4 className="price-title-1">PRICE<span className="price-title"> PACKAGES</span><hr class="section-dash-yellow mx-auto" ></hr></h4>
                    </div>


                    <div className=" container btn-container text-center ">
                        <Button variant="contained" style={{ color: "white", backgroundColor: "#febd0e" }} onClick={() => filterItem("webdesigning")} >webdesigning</Button>
                        <Button variant="contained" style={{ color: "white", backgroundColor: "#febd0e" }} onClick={() => filterItem("Branding")}>Branding</Button>
                        <Button variant="contained" style={{ color: "white", backgroundColor: "#febd0e" }} onClick={() => filterItem("graphicsDesigning")}>graphicsDesigning</Button>
                        <Button variant="contained" style={{ color: "white", backgroundColor: "#febd0e" }} onClick={() => filterItem("ui/uxDesigning")}>ui/uxDesigning</Button>
                        <Button variant="contained" style={{ color: "white", backgroundColor: "#febd0e" }} onClick={() => filterItem("logoDesigning")}>logoDesigning</Button>
                        <Button variant="contained" style={{ color: "white", backgroundColor: "#febd0e" }} onClick={() => filterItem("3D/2Danimation")}>Animation</Button>
                        <Button variant="contained" style={{ color: "white", backgroundColor: "#febd0e" }} onClick={() => filterItem("GFX")}>GFX</Button>
                    </div>
                    {/* <hr class="section-dash mx-auto" ></hr> */}




                    <div class="row">

                        {
                            priceapi.map((CurentElem) => {
                                return <div class="col-md-3 col-sm-6">
                                    <div class="pricingTable9" >
                                        <div class="pricingTable-header">
                                            <span class="price-value">{CurentElem.image}<span class="currency"></span></span>
                                            <h3 class="title">{CurentElem.title}</h3>
                                        </div>
                                        <ul class="pricing-content">
                                            <li>{CurentElem.space}</li>
                                            <li>{CurentElem.accounts}</li>
                                            <li>{CurentElem.bandwidth}</li>
                                            <li>{CurentElem.sub_domain}</li>
                                            <li>{CurentElem.domain}</li>
                                        </ul>
                                        <a href="#" style={{ textDecoration: "none" }} class="pricingTable-signup">Read More</a>
                                    </div>
                                </div>
                            })
                        }
                        {/* <div class="col-md-3 col-sm-6">
                            <div class="pricingTable9">
                                <div class="pricingTable-header">
                                    <span class="price-value">10<span class="currency">$</span></span>
                                    <h3 class="title">Standard</h3>
                                </div>
                                <ul class="pricing-content">
                                    <li>50GB Disk Space</li>
                                    <li>50 Email Accounts</li>
                                    <li>50GB Monthly Bandwidth</li>
                                    <li>10 Subdomains</li>
                                    <li>15 Domains</li>
                                </ul>
                                <a href="#" class="pricingTable-signup">Sign Up</a>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="pricingTable9 green">
                                <div class="pricingTable-header">
                                    <span class="price-value">20<span class="currency">$</span></span>
                                    <h3 class="title">Business</h3>
                                </div>
                                <ul class="pricing-content">
                                    <li>60GB Disk Space</li>
                                    <li>60 Email Accounts</li>
                                    <li>60GB Monthly Bandwidth</li>
                                    <li>15 Subdomains</li>
                                    <li>20 Domains</li>
                                </ul>
                                <a href="#" class="pricingTable-signup">Sign Up</a>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="pricingTable9 orange">
                                <div class="pricingTable-header">
                                    <span class="price-value">30<span class="currency">$</span></span>
                                    <h3 class="title">Premium</h3>
                                </div>
                                <ul class="pricing-content">
                                    <li>70GB Disk Space</li>
                                    <li>70 Email Accounts</li>
                                    <li>70GB Monthly Bandwidth</li>
                                    <li>20 Subdomains</li>
                                    <li>25 Domains</li>
                                </ul>
                                <a href="#" class="pricingTable-signup">Sign Up</a>
                            </div>
                        </div> */}
                        {/* <div class="col-md-3 col-sm-6">
                            <div class="pricingTable9 purple">
                                <div class="pricingTable-header">
                                    <span class="price-value">40<span class="currency">$</span></span>
                                    <h3 class="title">Extra</h3>
                                </div>
                                <ul class="pricing-content">
                                    <li>80GB Disk Space</li>
                                    <li>80 Email Accounts</li>
                                    <li>80GB Monthly Bandwidth</li>
                                    <li>25 Subdomains</li>
                                    <li>30 Domains</li>
                                </ul>
                                <a href="#" class="pricingTable-signup">Sign Up</a>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            <hr></hr>
        </>
    )
}

export default PriceChart
