import React from 'react'
import './style.css'

function Mylist() {
    return (
        <div className="mylist-container">
            <video autoPlay muted loop id="background-video">
                <source src="mylist-background.mp4" type="video/mp4" />
             </video>
        </div>
    )
}

export default Mylist
