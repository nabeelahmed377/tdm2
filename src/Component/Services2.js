import React, { useState } from 'react';
import sapi from "../Apis/ServicesAPI"

function Services2() {

    const [api, setapi] = useState(sapi)
    return (
        <>
            <section>
                <div className="container-fluid Services2-main-div" >
                    <div className="row">
                        {
                            api.map((CurentElem) => {
                                return < div className="col-lg-2 col-md-2 col-sm-4 sec-col">
                                    <div className="logo">{CurentElem.logo}</div>
                                    <div className="title">{CurentElem.title}</div>
                                    <div className="title">{CurentElem.info}</div>
                                </div>
                            })
                        }




                    </div>
                </div>
            </section>
        </>
    )
}

export default Services2
