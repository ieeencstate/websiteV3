import React from "react"
import "../styles/sponsors.css"
import IBM from "../assets/sponsors/ibm.png"
import CIENA from "../assets/sponsors/ciena.png"
import CITI from "../assets/sponsors/citi.png"
import FB from "../assets/sponsors/Facebook.png"
import GARMIN from "../assets/sponsors/garmin.png"
import IP from "../assets/sponsors/internatpaper.png"
import JD from "../assets/sponsors/johndeere.png"
import NORFOLK from "../assets/sponsors/norfolk.png"
import TI from "../assets/sponsors/ti.png"

// const logoArray = [IBM, CIENA, CITI, FB, GARMIN, IP, JD, NORFOLK, TI]

const Sponsors = () => {
    return (
       <section className = "sponsors">
           <h1>Our Sponsors</h1>
           <div className= "sponsorGrid">
           <div>
                <a href="https://www.ncsu.edu/" target= "_blank" rel="noopener noreferrer">
                    <img
                    src={IBM}
                    alt="IBM link"
                    />
                </a> 
            </div>
            <div>
                <a href="https://www.ncsu.edu/" target= "_blank" rel="noopener noreferrer">
                    <img
                    src={CIENA}
                    alt="Ciena link"
                    />
                </a> 
            </div>
            <div>
                <a href="https://www.ncsu.edu/" target= "_blank" rel="noopener noreferrer">
                    <img
                    src={CITI}
                    alt="Citi link"
                    />
                </a> 
            </div>
            <div>
                <a href="https://www.ncsu.edu/" target= "_blank" rel="noopener noreferrer">
                    <img
                    src={FB}
                    alt="Facebook link"
                    />
                </a> 
            </div>
            <div>
                <a href="https://www.ncsu.edu/" target= "_blank" rel="noopener noreferrer">
                    <img
                    src={GARMIN}
                    alt="Garmin link"
                    />
                </a> 
            </div>
            <div>
                <a href="https://www.ncsu.edu/" target= "_blank" rel="noopener noreferrer">
                    <img
                    src={IP}
                    alt="IP link"
                    />
                </a> 
            </div>
            <div>
                <a href="https://www.ncsu.edu/" target= "_blank" rel="noopener noreferrer">
                    <img
                    src={JD}
                    alt="JD link"
                    />
                </a> 
            </div>
            <div>
                <a href="https://www.ncsu.edu/" target= "_blank" rel="noopener noreferrer">
                    <img
                    src={NORFOLK}
                    alt="Norfolk link"
                    />
                </a> 
            </div>
            <div>
                <a href="https://www.ncsu.edu/" target= "_blank" rel="noopener noreferrer">
                    <img
                    src={TI}
                    alt="TI link"
                    />
                </a> 
            </div>
            </div>
        {/* {
            logoArray &&
            logoArray.map( (item, idx) => (
                <div>
                    <a href="https://www.ncsu.edu/" target= "_blank" rel="noopener noreferrer">
                        <img
                        src={item}
                        alt="IBM link"
                        />
                    </a> 
                </div>
            ))
        } */}
        
       </section>
    )
}
  
  export default Sponsors