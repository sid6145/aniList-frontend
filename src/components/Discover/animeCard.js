import React from 'react'
import './style.css'

function animeCard(props) {
    return (
        <div>
             <div className="anime-list">
                <div className="anime-card">
                    <img src={props.image} />
                    <h3>{props.title}</h3>
                </div>
           </div>
        </div>
    )
}

export default animeCard
