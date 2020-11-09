import React from 'react'
import './hero.style.css'

const Hero = () => {
    return (
        <div className="hero-container container">
            <div className="row justify-content-center align-items-center" style={{height:'80vh'}}>
                <div className="col-9 hero-box text-center">
                    <h1 className="hero-heading mb-3">Apply and hear back every time</h1>
                    <p className="hero-content">Exploring internships or jobs? Say good-bye to the typical job portals and use the power of Artificial Intelligence to become successful, faster.</p>
                    <button className="btn hero-btn">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Hero
