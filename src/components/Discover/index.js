import React from 'react'
import './style.css'

function Discover() {
    return (
        <div className="discover-container">
            <video autoPlay muted loop id="background-video">
                <source src="discovery-background.mp4" type="video/mp4" />
             </video>
        </div>
    )
}

export default Discover
