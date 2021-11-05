import React, { useState } from 'react'
import "./Accordian.css"
// import accordianapi from "../Apis/AccordianAPI"
import { questions } from "../Apis/AccordianAPI"




function Accordian({ questions, answer }) {

    console.log(questions)
    const [show, setShow] = useState(false)

    return (
        <>


            <div className="acc-title">
                <h3><span className="acc-span" onClick={() => setShow(!show)} >{!show ? "+" : "-"}</span>{questions}</h3>
                {show && <p>{answer}</p>}
            </div>


        </>
    )
}

export default Accordian
