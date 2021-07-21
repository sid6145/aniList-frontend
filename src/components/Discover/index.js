import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './style.css'

function Discover() {
    const [aniList, setAniList] = useState([])

    useEffect( async () => {
      let anime = await axios.get('https://kitsu.io/api/edge/anime')
      setAniList(anime.data.data)
    },[])

  console.log(aniList)


    return (
        <div className="discover-container">
            <video autoPlay muted loop id="background-video">
                <source src="discovery-background.mp4" type="video/mp4" />
             </video>

           
        </div>
    )
}

export default Discover
