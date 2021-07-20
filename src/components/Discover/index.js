import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './style.css'

function Discover() {
    const [list, setList] = useState([])

    
    useEffect(()=> {
        var options = {
            method: 'GET',
            url: 'https://hummingbirdv1.p.rapidapi.com/anime/steins-gate',
            headers: {
              'x-rapidapi-key': '011970864emshdb968718f081befp19f279jsn8fdb609d3051',
              'x-rapidapi-host': 'hummingbirdv1.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
              setList(response.data)
              console.log(response.data);
          }).catch(function (error) {
              console.error(error);
          });
    },[])

    console.log(list)

    return (
        <div className="discover-container">
            <video autoPlay muted loop id="background-video">
                <source src="discovery-background.mp4" type="video/mp4" />
             </video>
        </div>
    )
}

export default Discover
