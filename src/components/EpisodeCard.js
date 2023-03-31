import React from "react";
import {FaStar} from "react-icons/fa"

const EpisodeCard = ({ episode, seasonThree}) => {
    
    const getRandomNumber=(min,max)=>{
        const number=Math.random()*(max - min + 1) + min;
        const randomNumber=Math.round(number * 10) / 10
        return randomNumber
      }

  return (
    <div className="episodeCard" key={episode.id}>
      <div className="episodeCard__headline">
        <h5 className="episodeTitle">{episode.name}</h5>
        <h4>{episode.episode}</h4>
      </div>
      <img src={seasonThree} alt="Last episode" />
      <div className="episodeCard__rating">
        <p>
          <b>Date:</b> {episode.air_date}
        </p>
        <p className="starRating">
          <FaStar />
          <b>{getRandomNumber(7.5, 9)}/10</b>
        </p>
      </div>
    </div>
  );
};

export default EpisodeCard;
