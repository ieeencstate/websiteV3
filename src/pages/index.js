import React from "react"
import "../styles/index.css"
import About from "../components/about.js"
import Sponsors from "../components/sponsors.js"
import CarDemo from "../components/hero.js"

const IndexPage = () => {
    return (
        <main className = "main-section">
            <CarDemo />
            <About />
            <Sponsors />
        </main>
    )
}
  
  export default IndexPage
  