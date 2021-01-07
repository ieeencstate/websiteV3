import React from "react"
import "../styles/index.css"
import About from "../components/about.js"
import Sponsors from "../components/sponsors.js"

const IndexPage = () => {
    return (
        <main className = "main-section">
            <About />
            <Sponsors />
        </main>
    )
}
  
  export default IndexPage
  