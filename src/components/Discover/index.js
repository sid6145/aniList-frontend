import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import AnimeCard from "./animeCard";

function Discover() {
  // const [aniList, setAniList] = useState([])

  // useEffect( async () => {
  //   let anime = await axios.get('https://kitsu.io/api/edge/anime')
  //   setAniList(anime.data.data)
  // },[])

  //   console.log(aniList)

  return (
    <div className="discover-container">
      <video autoPlay muted loop id="background-video">
        <source src="discovery-background.mp4" type="video/mp4" />
      </video>
      <div className="anime-list">
        <AnimeCard image="images/naruto.jpg" title="Naruto Shippuden" />
        <AnimeCard image="images/fate.jpg" title="Fate Stay Knight" />
        <AnimeCard image="images/drstone.jpg" title="Dr. Stone" />
        <AnimeCard image="images/fma.png" title="FMA Brotherhood" />
        <AnimeCard image="images/onepiece.jpg" title="One Piece" />
        <AnimeCard image="images/demonslayer.jpg" title="Demon Slayer" />
        <AnimeCard image="images/clover.jpg" title="Black Clover" />
        <AnimeCard image="images/aot.jpg" title="Attack On Titan" />
      </div>
    </div>
  );
}

export default Discover;
