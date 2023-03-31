import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import seasonOne from '../images/season1.jpg'
import seasonThree from '../images/season3.jpg'
import seasonTwo from '../images/season2.jpg'
import seasonFour from '../images/season4.jpg'
import EpisodeCard from '../components/EpisodeCard'

const Home = () => {
  const episodes=useLoaderData()
  const [searchEpisode,setSearchEpisode]=useState('')
  let [newArray,setNewArray]=useState(episodes)
  newArray=(newArray.filter(episode=>((episode.name).toLowerCase()).includes(searchEpisode.toLowerCase())))
 
  
  const sortEpisodes=(seasonNum)=>{
    setNewArray(episodes.filter(episode=>episode.episode.slice(0, 3)===seasonNum))
    return newArray
  }

  return (
    <>
      <input className='search' type='text' value={searchEpisode} onChange={e=>setSearchEpisode(e.target.value)} placeholder='search episodes'/>
      <div className='sortBtns'>
        <button onClick={()=>sortEpisodes('S01')}>Season 1</button>
        <button onClick={()=>sortEpisodes('S02')}>Season 2</button>
        <button onClick={()=>sortEpisodes('S03')}>Season 3</button>
        <button onClick={()=>sortEpisodes('S04')}>Season 4</button>
      </div>
      <div className='episodes'>
        {
          newArray.map(episode=>{
            if(episode.episode.slice(0, 3)==='S01') {
              return <EpisodeCard key={episode.id} episode={episode} seasonThree={seasonOne}/>
            }
            if(episode.episode.slice(0, 3)==='S02') {
              return <EpisodeCard key={episode.id} episode={episode} seasonThree={seasonTwo}/>
            }
            if(episode.episode.slice(0, 3)==='S03') {
              return <EpisodeCard key={episode.id} episode={episode} seasonThree={seasonThree}/>
            }
            if(episode.episode.slice(0, 3)==='S04') {
              return <EpisodeCard key={episode.id} episode={episode} seasonThree={seasonFour}/>
            }
          })
        }
      </div>
      
    </>
  )
}

export default Home

export const episodeLoader=async()=>{

  let episodesArray=[]

  for(let i=1;i<4;i++){
    const res=await fetch(`https://rickandmortyapi.com/api/episode/?page=${i}`)
    if(!res.ok){
      throw Error('Cant fetch episodes')
    }
    const data=await res.json()
    episodesArray.push(data.results)
  }

  const allEpisodes=episodesArray[0].concat(episodesArray[1],episodesArray[2]);
  return allEpisodes
}